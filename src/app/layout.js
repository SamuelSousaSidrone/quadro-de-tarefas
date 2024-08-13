
import "./globals.css";



export const metadata = {
  title: "| Quadro de Tarefas |",
  description: "| Quadro de Tarefas Arastaveis |",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
