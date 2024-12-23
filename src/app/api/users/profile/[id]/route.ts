import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateUserDto } from "@/utils/dtos";
import bcrypt from "bcryptjs";

interface Props {
  params: { id: string };
}

/**
 *  @method DELETE
 *  @route ~/api/users/profile/:id
 *  @desc Delete Profile
 *  @access private
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    const userfromToken = verifyToken(request);
    if (userfromToken !== null && userfromToken.id === user.id) {
      await prisma.user.delete({
        where: { id: parseInt(params.id) },
      });
      return NextResponse.json(
        { message: "your profile (account) has been deleted" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "only user himself can delete his profile, forbidden" },
      { status: 403 } // forbidden
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}


/**
 *  @method GET
 *  @route ~/api/users/profile/:id
 *  @desc Get Profile By Id
 *  @access private
 */

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where:{ id: parseInt(params.id) },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        isAdmin: true,
      }
    });

    if(!user) {
      return NextResponse.json(
        { message: 'user not found' },
        { status: 404 }
      );
    }

    const userfromToken = verifyToken(request);
    if(userfromToken === null || userfromToken.id !== user.id){
      return NextResponse.json(
        { message: 'you are not allowed, access denied' },
        { status: 403 }
      )
    }

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}


/**
 *  @method PUT
 *  @route ~/api/users/profile/:id
 *  @desc Update Profile
 *  @access private
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique(
      { where: { id: parseInt(params.id) } }
    );

    if(!user){
      return NextResponse.json(
        { message: 'user not found' },
        { status: 404 }
      );
    }

    const userfromToken = verifyToken(request);
    if(userfromToken === null || userfromToken.id !== user.id) {
      return NextResponse.json(
        { message: 'you are not allowed, access denied' },
        { status: 403 } 
      );
    }

    const body = await request.json() as UpdateUserDto;

    if(body.password) {
      if(body.password.length < 6) {
        return NextResponse.json(
          { message: 'password should be minimum 6 characters' },
          { status: 400 }
        )
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: {
        username: body.username,
        email: body.email,
        password: body.password
      }
    });

    const { password, ...other } = updatedUser;

    return NextResponse.json({ ...other }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
