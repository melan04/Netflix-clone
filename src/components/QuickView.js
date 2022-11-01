import React from 'react';
import './QuickView.scss';
import CancelIcon from '@mui/icons-material/Cancel';

function QuickView({ bannerStyle, movie, popup, popupStatut }) {
  return (
    <div className={`quickView ${popupStatut && 'open'}`}>
      <div className="quickView_banner" style={bannerStyle}>
        <div className="quickView_content">
          <h3 className="quickView_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h3>
          <p>{movie?.overview}</p>
        </div>
        <button className="quickView_close" onClick={popup}>
          <CancelIcon />
        </button>
      </div>
    </div>
  );
}

export default QuickView;
