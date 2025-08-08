import { initialData } from "./Seed";
import prisma from "@/lib/prisma";

async function main() {
    await prisma.user.deleteMany();

    const { users } = initialData

    await prisma.user.createMany({
        data: users
    })
}