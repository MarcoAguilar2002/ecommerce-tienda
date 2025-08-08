"use client";
import Link from "next/link";
import React, { useState } from "react";

import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <LoginForm />
    </div>
  );
}
