import Speaker from './Speaker';


function SpeakersList({ data }) {
    return (
        <div className="container speaker-list">
            <div className="row">
               {data.map(function (speaker) {
                   return <Speaker key={speaker.id} speaker={speaker} />
               })}
            </div>
        </div>
    );
}

export default SpeakersList;