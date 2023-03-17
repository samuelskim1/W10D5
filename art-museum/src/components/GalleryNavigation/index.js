import { NavLink } from "react-router-dom";

function GalleryNavigation({ galleries }) {

    const galleryList = galleries.map((gallery) => {
      return (
        <>
            <NavLink
                to={`/galleries/${gallery.id}`}
            >
                {gallery.name}
            </NavLink>
            <br></br>
        </>
      );
    });

    return (
    <nav>
      <h1>Galleries</h1>

      <NavLink
        to="/"
      >
        Home
      </NavLink>

      <ul>
          {galleryList}
      </ul>
    </nav>
  );
}

export default GalleryNavigation;