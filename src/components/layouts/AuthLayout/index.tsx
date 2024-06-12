function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
      {children}
    </main>
  );
}

export default AuthLayout;
