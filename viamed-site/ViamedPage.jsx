import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, CreditCard } from "lucide-react";

export default function ViamedPage() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <header className="bg-white border-b py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/150x80.png?text=Viamed+Logo"
              alt="Viamed Logo"
              className="h-10"
            />
            <span className="text-xl font-bold text-blue-800">VIAMED</span>
          </div>
          <nav className="mt-4 sm:mt-0 space-x-6 text-blue-700 text-sm font-medium">
            <a href="#" className="hover:underline">INÍCIO</a>
            <a href="#" className="hover:underline">SOBRE</a>
            <a href="#" className="hover:underline">CONTATO</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Centro de Avaliação de Condutores</h1>
            <p className="text-lg text-blue-700 mb-6">Agende uma avaliação online pelo WhatsApp</p>
            <a href="https://wa.me/5547989297591" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-700 text-white px-8 py-4 text-lg">AGENDAR CONSULTA</Button>
            </a>
          </div>
          <img
            src="/mnt/data/A_screenshot_of_Viamed's_medical_evaluation_center.png"
            alt="Fachada Viamed"
            className="rounded-xl shadow-md w-full"
          />
        </section>

        <section className="grid md:grid-cols-3 gap-6 text-blue-800">
          <div className="flex flex-col items-center text-center">
            <Clock className="w-6 h-6 mb-2" />
            <h3 className="font-semibold text-lg">HORÁRIO DE ATENDIMENTO</h3>
            <p className="text-sm">Segunda a sexta<br />10:00 — 16:00</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCard className="w-6 h-6 mb-2" />
            <h3 className="font-semibold text-lg">FORMAS DE PAGAMENTO</h3>
            <p className="text-sm">Cartão de débito<br />Cartão de crédito<br />Pix, Dinheiro</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-6 h-6 mb-2" />
            <h3 className="font-semibold text-lg">ENDEREÇO</h3>
            <p className="text-sm">Rua Rio do Sul, 63 Sala 01<br />Centro, Blumenau, SC 89012-422</p>
          </div>
        </section>

        <section>
          <iframe
            title="Mapa Viamed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1424067604187!2d-49.0715!3d-26.9149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e6c6edcfb2b%3A0x18cba4bb0c3cfc8c!2sRua%20Rio%20do%20Sul%2C%2063%20-%20Centro%2C%20Blumenau%20-%20SC%2C%2089012-422!5e0!3m2!1spt-BR!2sbr!4v1685041474814!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md border"
          ></iframe>
        </section>
      </main>

      <footer className="bg-blue-50 text-center text-sm text-blue-700 py-6 border-t">
        <p>CNPJ: 57.834.361/0001-50 | Empresa de Pequeno Porte | Simples Nacional</p>
        <p>Viamed Serviços Médicos LTDA</p>
      </footer>
    </div>
  );
}
