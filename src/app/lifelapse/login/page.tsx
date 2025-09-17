"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Eye, EyeOff, Loader2 } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKey(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessKey.trim()) {
      setError("Please enter the access key");
      return;
    }

    setIsLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (accessKey.trim() === VALID_ACCESS_KEY) {
      router.push(`/lifelapse?key=${encodeURIComponent(accessKey.trim())}`);
    } else {
      setError("Invalid access key. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Card className="bg-card/50 backdrop-blur-sm border border-border/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Enter Access Key</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="accessKey">Access Key</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="accessKey"
                    type={showKey ? "text" : "password"}
                    value={accessKey}
                    onChange={handleKeyChange}
                    className="pl-10 pr-10"
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
                    className="absolute right-1 top-1 h-8 w-8 px-0 text-muted-foreground hover:text-foreground"
                    disabled={isLoading}
                    tabIndex={-1}
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
                className="w-full bg-blue-500 hover:blue-600"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Verifying..." : "Access Lifelapse"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
