"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/users">User</Link>
            </li>
            <li>
              <Link href="/products">Product</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            <li>
              <Link href="/api">Api</Link>
            </li>
            <li>
              <Link href="/upload">Upload</Link>
            </li>
            <li>
              {status === "authenticated" && <div>{session.user!.name}</div>}
              <Link href="/api/auth/signout">Sign out</Link>
            </li>
            <li>
              {status === "unauthenticated" && (
                <Link href="/api/auth/signin">Sign in</Link>
              )}
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Next.js
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/users">User</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/api">Api</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          <li>
            {status === "authenticated" && <div>{session.user!.name}</div>}
            <Link href="/api/auth/signout">Sign out</Link>
          </li>
          <li>
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign in</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
