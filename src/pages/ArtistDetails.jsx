import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails)
    return <Loader title="Searching artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
