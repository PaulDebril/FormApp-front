import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Documents() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
            <h2>Mes documents </h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Card>
            <CardHeader>
              <CardTitle>N° de Déclaration d’activité DA</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="da-number" placeholder="Entrer le numéro" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photo d’identité</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="photo" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CV classique à jour</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="cv" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CV OPQF (à modifier et compléter pour chaque OF)</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="opqf-cv" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diplômes, titres, qualités et références</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="diplomas" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Copie de la carte d'identité ou du passeport</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="id-card" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extrait du casier judiciaire n°3</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="casier" type="file" />
              <Button variant="link" className="mt-2" asChild>
                <a href="https://casier-judiciaire.justice.gouv.fr/">Obtenir un extrait ici</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsabilité civile individuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="civil-responsability" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accord de cumul d'activité (Pour les agents de la fonction publique)</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="cumul-agreement" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attestation de situation (Pour les retraités)</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="situation" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>RIB</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="rib" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attestation de vigilance émanant de l'URSSAF</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="urssaf" type="file" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attestation d'affiliation à l'URSSAF ou extrait de l'inscription de l'entreprise</CardTitle>
            </CardHeader>
            <CardContent>
              <Input id="affiliation" type="file" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
