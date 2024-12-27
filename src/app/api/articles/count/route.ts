import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

/**
 *  @method GET
 *  @route ~/api/articles/search?searchText=value
 *  @desc Get Articles By searchText
 *  @access public
 */

export async function GET(request: NextRequest) {
    try {
        const count = await prisma.article.count();
        return NextResponse.json({ count }, { status: 200});
    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        )
    }
}