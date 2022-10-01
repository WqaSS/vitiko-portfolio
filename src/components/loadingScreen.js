import cigarette from '../assets/cigarette.gif';
export default function loadingScreen() { 


	return (
        <div className="loading">
            <h1>Wait for a second...</h1>
            <hr/>
            <code>Uncaught ReferenceError:<br/>'connection' is not defined</code>
            <img alt="Loading Screen Gif" src="../assets/cigarette.gif" />
        </div>
	)
}