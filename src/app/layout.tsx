/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { UserStoreProvider } from "~/providers/user-store-provider";

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "VtubeDex",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <SidebarTrigger className="m-2 absolute" />
              <TRPCReactProvider>
                <UserStoreProvider>
                  {children}
                  <SpeedInsights />
                </UserStoreProvider>
              </TRPCReactProvider>
            </SidebarInset>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}
