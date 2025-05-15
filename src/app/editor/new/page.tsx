import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// This page would typically involve a form to create a new novel (title, genre, etc.)
// and then redirect to /editor/[id] or initialize the editor state.
// For now, it's a simple placeholder.

export default function NewNovelPage() {
  // Placeholder ID for a new novel, in a real app this would be generated
  const newNovelId = "placeholder-new-novel-id"; 

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Create a New Novel</CardTitle>
            <CardDescription>
              Fill in the details below to start your next literary adventure.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="novel-title">Novel Title</Label>
              <Input id="novel-title" placeholder="E.g., The Galactic Odyssey" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="novel-genre">Genre</Label>
              <Input id="novel-genre" placeholder="E.g., Science Fiction, Fantasy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="novel-synopsis">Synopsis (Optional)</Label>
              <Textarea id="novel-synopsis" placeholder="A brief summary of your novel..." />
            </div>
            <Button className="w-full" asChild>
              {/* In a real app, this would trigger a creation process then redirect */}
              <Link href={`/editor/${newNovelId}`}>
                Start Writing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
