export const metadata = {
  title: 'Calculadora de Diaria',
  description: 'Veja quantas g cabem no seu orçamento',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
