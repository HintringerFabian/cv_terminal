import React, {JSX} from "react";
import '../css/UserInfo.css'

type UserInfoProps = {
	componentType: JSX.Element | null;
}

function UserInfo({componentType}: UserInfoProps) {
	function getDate(): string {
		const date: Date = new Date();
		const hours: number = date.getHours();
		const minutes: number = date.getMinutes();
		return `${hours}:${minutes}`;
	}

	return (
		<div className="Input">
			<div className="part">
				<div className="terminal-blue">┌─</div>
				<div className="terminal-white">[FabianHintringer@CV]</div>
				<div className="terminal-blue">─</div>
				<div className="terminal-yellow">(~)</div>
			</div>

			<div className="part">
				<div className="terminal-blue">└─</div>
				{/* TODO: This should display the correct time */}
				<div className="terminal-green">{getDate()} - </div>
				<div className="terminal-green">(^_^)</div>
				<div className="terminal-yellow">[$]</div>
				{componentType}
			</div>
		</div>
	);
}

export default UserInfo;