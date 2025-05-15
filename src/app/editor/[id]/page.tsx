import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Eye, MessageSquare, Share2, Settings2 } from "lucide-react";

export default function NovelEditorPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Novel Editor</h1>
            <p className="text-muted-foreground">Editing: <span className="font-semibold text-primary">Novel Title (ID: {params.id})</span></p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Share2 className="mr-2 h-4 w-4"/> Share</Button>
            <Button variant="outline" size="sm"><Settings2 className="mr-2 h-4 w-4"/> Settings</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground"><Save className="mr-2 h-4 w-4"/> Save</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {/* Markdown Editor Area */}
          <Card className="md:col-span-2 shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Markdown Editor</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" aria-label="Preview">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Comments">
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>Write your story using Markdown. Changes are auto-saved.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <Textarea 
                placeholder="Start typing your masterpiece here..."
                className="h-full w-full resize-none border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 p-4"
                defaultValue={`# Chapter 1: The Beginning\n\nIt was a dark and stormy night...`}
              />
            </CardContent>
          </Card>

          {/* Preview & Tools Area */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>See how your formatted text will appear to readers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert p-4 border rounded-md min-h-[200px] bg-muted/30">
                <h1>Chapter 1: The Beginning</h1>
                <p>It was a dark and stormy night...</p>
                {/* Add more preview elements here */}
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Collaboration Tools</h3>
                <Button variant="outline" className="w-full mb-2">Invite Editor</Button>
                <Button variant="outline" className="w-full">Version History</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
