import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";

export default function Pokemon({
  pokemon,
  prevPageUrl,
  nextPageUrl,
  gotoNextPage,
  gotoPrevPage,
}) {
  return (
    <>
      <Header />
      <main className="main">
        <List pokemon={pokemon} />
      </main>
      <div className="pagination">
        {prevPageUrl && <button onClick={gotoPrevPage}>Previous</button>}
        {nextPageUrl && <button onClick={gotoNextPage}>Next</button>}
      </div>
      <Footer />
    </>
  );
}
