import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Download, FileText, Image, Video, File } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: string;
  created_at: string;
}

const Resources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: false });
    
    if (data) setResources(data as Resource[]);
    setLoading(false);
  };

  const getFileIcon = (fileType: string) => {
    if (fileType?.includes("image")) return <Image className="h-8 w-8 text-primary" />;
    if (fileType?.includes("video")) return <Video className="h-8 w-8 text-primary" />;
    if (fileType?.includes("pdf") || fileType?.includes("document")) return <FileText className="h-8 w-8 text-primary" />;
    return <File className="h-8 w-8 text-primary" />;
  };

  const getFileTypeBadge = (fileType: string) => {
    if (fileType?.includes("pdf")) return "PDF";
    if (fileType?.includes("image")) return "Image";
    if (fileType?.includes("video")) return "Video";
    if (fileType?.includes("word") || fileType?.includes("document")) return "Document";
    if (fileType?.includes("spreadsheet") || fileType?.includes("excel")) return "Spreadsheet";
    return "File";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
      <Header />
      
      <main className="flex-1">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Resources</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Download free learning materials and resources
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="h-8 w-8 bg-muted rounded" />
                      <div className="h-6 bg-muted rounded w-3/4 mt-2" />
                    </CardHeader>
                    <CardContent>
                      <div className="h-4 bg-muted rounded w-full mb-2" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : resources.length === 0 ? (
              <div className="text-center py-12">
                <File className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Resources Available</h3>
                <p className="text-muted-foreground">Check back later for new learning materials.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        {getFileIcon(resource.file_type)}
                        <Badge variant="secondary">{getFileTypeBadge(resource.file_type)}</Badge>
                      </div>
                      <CardTitle className="mt-4">{resource.title}</CardTitle>
                      {resource.description && (
                        <CardDescription>{resource.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(resource.created_at).toLocaleDateString()}
                        </span>
                        <Button asChild size="sm">
                          <a href={resource.file_url} target="_blank" rel="noopener noreferrer" download>
                            <Download className="mr-2 h-4 w-4" /> Download
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;