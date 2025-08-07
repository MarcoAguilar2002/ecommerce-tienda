"use client";
import Link from "next/link";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { FaStickyNote, FaShippingFast } from "react-icons/fa";
import { Details, Resume } from "@/components";

export default function CartPage() {
  return (
    <div className="flex justify-center items-start min-h-screen mb-72 px-4 sm:px-0 py-10">
      <div className="flex flex-col sm:flex-row w-full max-w-[1500px] gap-4 sm:gap-6">
        <div className="w-full sm:w-2/3">
          <Details />
        </div>
        <div className="w-full sm:w-1/3">
          <Resume />
        </div>
      </div>
    </div>
  );
}