import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, BookOpen, Bell } from "lucide-react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your creative space.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-accent" />
                Recent Works
              </CardTitle>
              <CardDescription>Quick access to your latest projects.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder content */}
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">No recent works yet.</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <Link href="/my-works/novels">View All Works</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlusCircle className="h-6 w-6 text-accent" />
                Start Creating
              </CardTitle>
              <CardDescription>Begin your next masterpiece.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/editor/new">Create New Novel</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/comics/upload">Upload New Comic</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-accent" />
                Notifications
              </CardTitle>
              <CardDescription>Stay updated with important alerts.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder content */}
              <p className="text-sm text-muted-foreground">No new notifications.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
