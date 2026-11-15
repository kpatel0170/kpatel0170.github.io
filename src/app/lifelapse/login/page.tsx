"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Key, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const VALID_ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;

export default function LifelapseLoginPage() {
  const [accessKey, setAccessKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState("");
  // Bumped on every failure so the alert remounts and its one-shot shake replays.
  const [errorTick, setErrorTick] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const showError = (message: string) => {
    setError(message);
    setErrorTick((tick) => tick + 1);
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKey(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKey.trim()) {
      showError("Please enter the access key");
      return;
    }

    setIsLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (accessKey.trim() === VALID_ACCESS_KEY) {
      router.push(`/lifelapse?key=${encodeURIComponent(accessKey.trim())}`);
    } else {
      showError("Invalid access key. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-sm flex-col justify-center gap-8">
      <div className="space-y-3">
        <p className="font-mono text-xs tracking-wider text-subtle-foreground uppercase">
          <span className="flex items-center gap-2">
            <Lock className="size-3.5" aria-hidden="true" />
            Protected
          </span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Enter access key
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <Alert key={errorTick} variant="destructive" className="shake">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="accessKey">Access key</Label>
          <div className="relative">
            <Key className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="accessKey"
              type={showKey ? "text" : "password"}
              value={accessKey}
              onChange={handleKeyChange}
              className="h-10 pr-10 pl-10"
              placeholder="Enter your access key"
              disabled={isLoading}
              autoComplete="off"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowKey(!showKey)}
              className="absolute top-1 right-1 h-8 w-8 px-0 text-muted-foreground hover:text-foreground"
              disabled={isLoading}
              tabIndex={-1}
              aria-label={showKey ? "Hide access key" : "Show access key"}
            >
              {showKey ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading || !accessKey.trim()}
          className="h-10 w-full"
        >
          {isLoading ? "Verifying" : "Access Lifelapse"}
        </Button>
      </form>
    </div>
  );
}
