import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, FileArchive, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function ComicUploadPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Upload Your Comic</CardTitle>
            <CardDescription>Share your visual stories with the Stellary community.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Comic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="comic-title">Comic Title</Label>
                        <Input id="comic-title" placeholder="E.g., Adventures of Sparky" />
                    </div>
                    <div>
                        <Label htmlFor="comic-genre">Genre</Label>
                        <Input id="comic-genre" placeholder="E.g., Slice of Life, Action" />
                    </div>
                </div>
                <div>
                    <Label htmlFor="comic-cover">Cover Image (Optional)</Label>
                    <Input id="comic-cover" type="file" accept="image/*" />
                </div>
            </div>
            
            {/* Upload Area */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Upload Pages</h3>
                <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center space-y-4 hover:border-primary transition-colors">
                    <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="text-muted-foreground">Drag & drop comic pages here (JPEG, PNG, WebP)</p>
                    <p className="text-sm text-muted-foreground">or</p>
                    <Button variant="outline">
                        <FileArchive className="mr-2 h-4 w-4" /> Select Files or ZIP
                    </Button>
                    <Input type="file" multiple className="hidden" id="file-upload-input" />
                </div>
            </div>

            {/* Page Management Preview (Placeholder) */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Uploaded Pages (Preview)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="relative aspect-[2/3] border rounded-md overflow-hidden group">
                            <Image src={`https://placehold.co/200x300.png?text=Page+${i}`} alt={`Page ${i}`} layout="fill" objectFit="cover" data-ai-hint="comic page" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                Page {i}
                            </div>
                        </div>
                    ))}
                     <Button variant="outline" className="aspect-[2/3] flex flex-col items-center justify-center text-muted-foreground hover:text-primary hover:border-primary">
                        <PlusCircle className="h-8 w-8 mb-1" />
                        Add More
                    </Button>
                </div>
            </div>

            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Publish Comic
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
