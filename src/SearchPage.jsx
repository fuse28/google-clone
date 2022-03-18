import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import FeedIcon from "@mui/icons-material/Feed";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

export default function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchpage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJzbnX4yyb7ekXoUeb4PXTamKvQ78mefFCw&usqp=CAU"
            alt="googleLogo"
          />
        </Link>
        <div className="searchPage-headerBody">
          <Search hidebuttons />
          <div className="searchPage-options">
            <div className="searchPage-optionLeft">
              <div className="single-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="single-option">
                <FeedIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="single-option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="single-option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="single-option">
                <AddLocationAltIcon />
                <Link to="/all">Location</Link>
              </div>
              <div className="single-option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage-optionRight">
              <div className="single-option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="single-option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
            About {data?.searchInformation.formattedTotalResults} results in{" "}
            {""}
            {data?.searchInformation.formattedSearchTime} secs for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage-result">
              <a href={item.link} target="_blank">
                {item.pagemap?.cse_image?.lenght > 0 &&
                  item.pagemap?.cse_image[0].src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.lenght > 0 &&
                        item.pagemap?.cse_image[0].src
                      }
                      className="searchPage-resultImage"
                      alt=""
                    />
                  )}

                <p>{item.link}</p>
              </a>
              <a className="searchPage-resultTitle" href="" target="_blank">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage-resultDescription">{item.snippet}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
