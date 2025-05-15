
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ExternalLink } from "lucide-react" // Using ExternalLink as a generic icon

// Import Firebase auth and the initialized app
import { auth } from "@/lib/firebase"; // This will ensure firebase is initialized
import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider, // For Apple
  // User, // Potentially for typing the result
} from "firebase/auth";
import { useToast } from "@/hooks/use-toast" // For showing messages

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const { toast } = useToast()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    // TODO: Implement email/password authentication
    // For example, using Firebase's signInWithEmailAndPassword
    toast({
      title: "Email Sign-In",
      description: "Email/password sign-in is not yet implemented.",
      variant: "destructive",
    })
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  async function onOAuthSignIn(providerName: "google" | "apple") {
    setIsLoading(true);
    // auth is now imported from @/lib/firebase, ensuring it's initialized

    let provider;
    if (providerName === "google") {
      provider = new GoogleAuthProvider();
    } else if (providerName === "apple") {
      provider = new OAuthProvider('apple.com');
      // Optional: Add custom parameters or scopes for Apple
      // provider.addScope('email');
      // provider.addScope('name');
      // provider.setCustomParameters({ locale: 'zh_CN' }); // Example for Chinese locale
    } else {
      console.error("Unsupported provider:", providerName);
      toast({
        title: "錯誤",
        description: "不支援的登入提供商。",
        variant: "destructive",
      })
      setIsLoading(false);
      return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(`${providerName} sign-in successful:`, user);
      toast({
        title: "登入成功",
        description: `已透過 ${providerName} 成功登入。`,
      })

      // TODO: 將用戶資訊存入您的數據庫
      // 這通常透過後端服務完成（例如 Firebase Function onUserCreate 觸發器，或呼叫一個 Next.js API 路由）。
      // 例如:
      // try {
      //   const response = await fetch('/api/user/sync', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       uid: user.uid,
      //       email: user.email,
      //       displayName: user.displayName,
      //       providerId: result.providerId,
      //     }),
      //   });
      //   if (!response.ok) {
      //     throw new Error('Failed to sync user to database');
      //   }
      //   const dbResult = await response.json();
      //   console.log('User synced to DB:', dbResult);
      // } catch (dbError) {
      //   console.error('Database sync error:', dbError);
      //   toast({
      //     title: "資料庫同步錯誤",
      //     description: "無法將用戶資訊同步到資料庫。",
      //     variant: "destructive",
      //   });
      // }

      // Redirect user or update UI, e.g., router.push('/dashboard')
      // For now, we'll just log success and stop loading.

    } catch (error: any) {
      console.error(`${providerName} sign-in error:`, error);
      let errorMessage = "登入失敗，請稍後再試。";
      if (error.code === 'auth/account-exists-with-different-credential') {
        errorMessage = "此帳號已使用不同的登入方式存在。請嘗試使用原登入方式。";
      } else if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "登入視窗已關閉。";
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = "已取消多個同時彈出的登入請求。"
      }
      // Add more specific error handling as needed
      toast({
        title: `${providerName} 登入失敗`,
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">電子郵件</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading && (
              <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            使用電子郵件登入
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            或繼續
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" type="button" disabled={isLoading} onClick={() => onOAuthSignIn("google")}>
          {isLoading ? (
            <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <ExternalLink className="mr-2 h-4 w-4" /> // Placeholder, consider using Google's actual icon SVG
          )}{" "}
          Google
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} onClick={() => onOAuthSignIn("apple")}>
          {isLoading ? (
            <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <ExternalLink className="mr-2 h-4 w-4" /> // Placeholder, consider using Apple's actual icon SVG
          )}{" "}
          Apple
        </Button>
      </div>
    </div>
  )
}
