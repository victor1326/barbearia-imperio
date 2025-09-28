import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { randomUUID } from "node:crypto";
const prisma = new PrismaClient();

type ScheduleRequest = {
  title: string;
  barber: string;
  price: string;
  date: Date;
  clientId: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  let {
        title,
        barber,
        price,
        date,
        clientId,
      }: ScheduleRequest  = await req.json();
  date = new Date(date);
  const schedule = await prisma.schedule.create({ 
    data: {
      id: randomUUID(),
      title,
      barber,
      price,
      date,
      clientId,
    }
  })
  return NextResponse.json({ message: "created", schedule });
}
