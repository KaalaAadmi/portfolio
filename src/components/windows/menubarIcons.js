import React from "react";

const MenubarIcons = ({ link, tooltipContent, classname, source }) => {
	if (link) {
		return (
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				data-tooltip-id="tooltip"
				data-tooltip-content={tooltipContent}
			>
				<div className={`${classname} menu_icon`}>
					<img
						src={source}
						alt={classname}
						style={{ height: "40px", width: "40px" }}
					/>
				</div>
			</a>
		);
	} else {
		<div
			className={`${classname} menu_icon`}
			data-tooltip-id="tooltip"
			data-tooltip-content={tooltipContent}
		>
			<img
				src={source}
				alt={classname}
				style={{ height: "40px", width: "40px" }}
			/>
		</div>;
	}
};

export default MenubarIcons;
