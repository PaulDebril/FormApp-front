import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function turnover() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Facture</h2>
        </div>
      </header>
      <main className="m-10 min-h-[calc(100vh-57px-97px)] flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Mon chiffre d'affaires</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="thismonth" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="thismonth">Mois courant</TabsTrigger>
                <TabsTrigger value="bymonth">Par mois</TabsTrigger>
                <TabsTrigger value="byyear">Par année</TabsTrigger>
              </TabsList>
              <TabsContent value="thismonth">..........</TabsContent>
              <TabsContent value="bymonth">..........</TabsContent>
              <TabsContent value="byyear">..........</TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Ajouter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}