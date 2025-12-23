"use client";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function Home() {
    useEffect(() => {
        (async () => {
            await OneSignal.init({
                appId: "be8146bf-a9f7-4008-b70e-5b96253e34a2",
                notifyButton: {
                    enable: true,
                },
            });
        })();
    });
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="onesignal-customlink-container"></div>
            </main>
        </div>
    );
}
