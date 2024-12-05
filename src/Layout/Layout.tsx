import "./Layout.css";
import me from "data-base64:assets/kidker95.jpg"

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <p>This addon replaces all the photos with imageNotFound photos</p>
			<img src={me} alt="Author"/>
        </div>
    );
}
