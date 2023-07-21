export default function ErrorHandler({status = 404, message = 'Page not found'}) {
  return (
    <section className="error-handler">
      <h2>{status} - {message}</h2>
      <p>Try using the navigation bar to move around the website</p>
    </section>
  );
}
