const Integration = () => {
  return (
    <section className="py-20 lg:py-32" id="integration">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Conecte seu relógio e tudo fica ainda mais inteligente.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Sincronize passos, calorias e atividades automaticamente.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
            <span className="text-3xl font-bold text-muted-foreground hover:text-primary transition">
              STRAVA
            </span>
            <span className="text-3xl font-bold text-muted-foreground hover:text-primary transition">
              GARMIN
            </span>
            <span className="text-3xl font-bold text-muted-foreground hover:text-primary transition">
              MI FIT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
