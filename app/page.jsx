"use client";
import React from "react";
import Link from "next/link";
import { HOST, PROTOCOL } from "@/lib/constants";

const buttonStyle = {
  border: "1px solid transparent",
  borderRadius: "0.375rem",
  padding: "1rem 2rem",
  margin: "1rem",
  textDecoration: "none",
  display: "inline-block",
  textAlign: "center",
  fontSize: "1.25rem",
  fontWeight: "bold",
  backgroundColor: "#fff",
  color: "#000",
  transition: "background-color 0.3s, color 0.3s",
};

const links = [
  { text: "User", path: "user" },
  { text: "Industry", path: "industry" },
  { text: "Admin", path: "admin" },
  { text: "Supplier", path: "supplier" },
];

const ButtonLink = ({ href, text }) => (
  <Link
    href={`${href}`}
    className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    style={buttonStyle}
  >
    {text}
  </Link>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {links.map((link, index) => (
          <ButtonLink
            key={index}
            href={`${PROTOCOL}://${link.path}.${HOST}`}
            text={link.text}
          />
        ))}
      </div>
    </main>
  );
}
