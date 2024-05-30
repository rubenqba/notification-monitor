import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 p-4">
      {/* Sección de Email */}
      <section id="email" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Email</h2>
        {/* Aquí puedes agregar tablas y gráficas de Email */}
      </section>

      {/* Sección de SMS */}
      <section id="sms" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SMS</h2>
        {/* Aquí puedes agregar tablas y gráficas de SMS */}
      </section>

      {/* Sección de Push */}
      <section id="push" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Push</h2>
        {/* Aquí puedes agregar tablas y gráficas de Push */}
      </section>

      {/* Sección de WhatsApp */}
      <section id="whatsapp" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">WhatsApp</h2>
        {/* Aquí puedes agregar tablas y gráficas de WhatsApp */}
      </section>
    </main>
  );
}
