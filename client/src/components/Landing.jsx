import React from 'react';
import styles from '../styles/LandingStyles.module.css';
import soccerBall from '../images/soccerBallLanding.png';
import { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Landing() {
	const [infoVisibility, setInfoVisibility] = useState([false, false, false]);

	function changeInfoVisibility(target) {
		let visibility = [...infoVisibility];
		visibility[target] = !visibility[target];
		setInfoVisibility(visibility);
	}

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.halfCircleLeft}></div>
			<div className={styles.halfCircleRight}></div>
			<svg
				width="688"
				height="94"
				viewBox="0 0 688 94"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.logo}
			>
				<mask
					id="path-1-outside-1_662_40"
					maskUnits="userSpaceOnUse"
					x="0.399994"
					y="0.376007"
					width="687"
					height="94"
					fill="white"
				>
					<rect
						fill="white"
						x="0.399994"
						y="0.376007"
						width="687"
						height="94"
					/>
					<path d="M29.816 70.496H57.208V92H1.39999V1.37601H29.816V70.496Z" />
					<path d="M62.31 55.904C62.31 48.3093 63.59 41.7387 66.15 36.192C68.7953 30.56 72.3793 26.2933 76.902 23.392C81.4247 20.4053 86.502 18.912 92.134 18.912C96.8273 18.912 100.881 19.8933 104.294 21.856C107.707 23.7333 110.31 26.336 112.102 29.664V19.808H140.39V92H112.102V82.144C110.31 85.472 107.707 88.1173 104.294 90.08C100.881 91.9573 96.8273 92.896 92.134 92.896C86.502 92.896 81.4247 91.4453 76.902 88.544C72.3793 85.5573 68.7953 81.2907 66.15 75.744C63.59 70.112 62.31 63.4987 62.31 55.904ZM112.102 55.904C112.102 52.064 111.121 49.0773 109.158 46.944C107.195 44.8107 104.678 43.744 101.606 43.744C98.534 43.744 96.0167 44.8107 94.054 46.944C92.0913 49.0773 91.11 52.064 91.11 55.904C91.11 59.744 92.0913 62.7307 94.054 64.864C96.0167 66.9973 98.534 68.064 101.606 68.064C104.678 68.064 107.195 66.9973 109.158 64.864C111.121 62.7307 112.102 59.744 112.102 55.904Z" />
					<path d="M203.316 33.12C206.217 28.9387 209.759 25.6107 213.94 23.136C218.121 20.576 222.473 19.296 226.996 19.296V49.632H218.932C213.556 49.632 209.588 50.5707 207.028 52.448C204.553 54.3253 203.316 57.6533 203.316 62.432V92H174.9V19.808H203.316V33.12Z" />
					<path d="M304.538 55.264C304.538 57.2267 304.41 59.104 304.154 60.896H258.458C258.885 67.1253 261.487 70.24 266.266 70.24C269.338 70.24 271.557 68.832 272.922 66.016H303.002C301.978 71.136 299.802 75.744 296.474 79.84C293.231 83.8507 289.093 87.0507 284.058 89.44C279.109 91.744 273.647 92.896 267.674 92.896C260.506 92.896 254.106 91.4027 248.474 88.416C242.927 85.4293 238.575 81.1627 235.418 75.616C232.346 69.984 230.81 63.4133 230.81 55.904C230.81 48.3947 232.346 41.8667 235.418 36.32C238.575 30.688 242.927 26.3787 248.474 23.392C254.106 20.4053 260.506 18.912 267.674 18.912C274.842 18.912 281.199 20.4053 286.746 23.392C292.378 26.2933 296.73 30.4747 299.802 35.936C302.959 41.3973 304.538 47.84 304.538 55.264ZM275.738 48.48C275.738 46.0907 274.97 44.2987 273.434 43.104C271.898 41.824 269.978 41.184 267.674 41.184C262.639 41.184 259.695 43.616 258.842 48.48H275.738Z" />
					<path d="M345.653 92.896C338.826 92.896 332.768 91.7867 327.477 89.568C322.272 87.3493 318.133 84.2773 315.061 80.352C311.989 76.4267 310.24 71.9893 309.813 67.04H337.077C337.418 69.1733 338.314 70.752 339.765 71.776C341.301 72.8 343.221 73.312 345.525 73.312C346.976 73.312 348.128 73.0133 348.981 72.416C349.834 71.7333 350.261 70.9227 350.261 69.984C350.261 68.3627 349.365 67.2107 347.573 66.528C345.781 65.8453 342.752 65.0773 338.485 64.224C333.28 63.2 328.97 62.0907 325.557 60.896C322.229 59.7013 319.285 57.6533 316.725 54.752C314.25 51.8507 313.013 47.84 313.013 42.72C313.013 38.2827 314.165 34.272 316.469 30.688C318.858 27.0187 322.357 24.16 326.965 22.112C331.573 19.9787 337.162 18.912 343.733 18.912C353.461 18.912 361.056 21.3013 366.517 26.08C372.064 30.8587 375.392 37.088 376.501 44.768H351.285C350.858 42.8053 349.962 41.312 348.597 40.288C347.232 39.1787 345.397 38.624 343.093 38.624C341.642 38.624 340.533 38.9227 339.765 39.52C338.997 40.032 338.613 40.8427 338.613 41.952C338.613 43.4027 339.509 44.512 341.301 45.28C343.093 45.9627 345.952 46.688 349.877 47.456C355.082 48.48 359.477 49.632 363.061 50.912C366.645 52.192 369.76 54.4107 372.405 57.568C375.05 60.64 376.373 64.9067 376.373 70.368C376.373 74.6347 375.136 78.4747 372.661 81.888C370.186 85.3013 366.602 87.9893 361.909 89.952C357.301 91.9147 351.882 92.896 345.653 92.896Z" />
					<path d="M457.538 55.264C457.538 57.2267 457.41 59.104 457.154 60.896H411.458C411.885 67.1253 414.487 70.24 419.266 70.24C422.338 70.24 424.557 68.832 425.922 66.016H456.002C454.978 71.136 452.802 75.744 449.474 79.84C446.231 83.8507 442.093 87.0507 437.058 89.44C432.109 91.744 426.647 92.896 420.674 92.896C413.506 92.896 407.106 91.4027 401.474 88.416C395.927 85.4293 391.575 81.1627 388.418 75.616C385.346 69.984 383.81 63.4133 383.81 55.904C383.81 48.3947 385.346 41.8667 388.418 36.32C391.575 30.688 395.927 26.3787 401.474 23.392C407.106 20.4053 413.506 18.912 420.674 18.912C427.842 18.912 434.199 20.4053 439.746 23.392C445.378 26.2933 449.73 30.4747 452.802 35.936C455.959 41.3973 457.538 47.84 457.538 55.264ZM428.738 48.48C428.738 46.0907 427.97 44.2987 426.434 43.104C424.898 41.824 422.978 41.184 420.674 41.184C415.639 41.184 412.695 43.616 411.842 48.48H428.738Z" />
					<path d="M494.941 33.12C497.842 28.9387 501.384 25.6107 505.565 23.136C509.746 20.576 514.098 19.296 518.621 19.296V49.632H510.557C505.181 49.632 501.213 50.5707 498.653 52.448C496.178 54.3253 494.941 57.6533 494.941 62.432V92H466.525V19.808H494.941V33.12Z" />
					<path d="M562.883 64.992L574.403 19.808H604.611L580.547 92H545.091L521.027 19.808H551.235L562.883 64.992Z" />
					<path d="M608.31 55.904C608.31 48.3093 609.59 41.7387 612.15 36.192C614.795 30.56 618.379 26.2933 622.902 23.392C627.425 20.4053 632.502 18.912 638.134 18.912C642.827 18.912 646.881 19.8933 650.294 21.856C653.707 23.7333 656.31 26.336 658.102 29.664V19.808H686.39V92H658.102V82.144C656.31 85.472 653.707 88.1173 650.294 90.08C646.881 91.9573 642.827 92.896 638.134 92.896C632.502 92.896 627.425 91.4453 622.902 88.544C618.379 85.5573 614.795 81.2907 612.15 75.744C609.59 70.112 608.31 63.4987 608.31 55.904ZM658.102 55.904C658.102 52.064 657.121 49.0773 655.158 46.944C653.195 44.8107 650.678 43.744 647.606 43.744C644.534 43.744 642.017 44.8107 640.054 46.944C638.091 49.0773 637.11 52.064 637.11 55.904C637.11 59.744 638.091 62.7307 640.054 64.864C642.017 66.9973 644.534 68.064 647.606 68.064C650.678 68.064 653.195 66.9973 655.158 64.864C657.121 62.7307 658.102 59.744 658.102 55.904Z" />
				</mask>
				<path
					d="M29.816 70.496H57.208V92H1.39999V1.37601H29.816V70.496Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M62.31 55.904C62.31 48.3093 63.59 41.7387 66.15 36.192C68.7953 30.56 72.3793 26.2933 76.902 23.392C81.4247 20.4053 86.502 18.912 92.134 18.912C96.8273 18.912 100.881 19.8933 104.294 21.856C107.707 23.7333 110.31 26.336 112.102 29.664V19.808H140.39V92H112.102V82.144C110.31 85.472 107.707 88.1173 104.294 90.08C100.881 91.9573 96.8273 92.896 92.134 92.896C86.502 92.896 81.4247 91.4453 76.902 88.544C72.3793 85.5573 68.7953 81.2907 66.15 75.744C63.59 70.112 62.31 63.4987 62.31 55.904ZM112.102 55.904C112.102 52.064 111.121 49.0773 109.158 46.944C107.195 44.8107 104.678 43.744 101.606 43.744C98.534 43.744 96.0167 44.8107 94.054 46.944C92.0913 49.0773 91.11 52.064 91.11 55.904C91.11 59.744 92.0913 62.7307 94.054 64.864C96.0167 66.9973 98.534 68.064 101.606 68.064C104.678 68.064 107.195 66.9973 109.158 64.864C111.121 62.7307 112.102 59.744 112.102 55.904Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M203.316 33.12C206.217 28.9387 209.759 25.6107 213.94 23.136C218.121 20.576 222.473 19.296 226.996 19.296V49.632H218.932C213.556 49.632 209.588 50.5707 207.028 52.448C204.553 54.3253 203.316 57.6533 203.316 62.432V92H174.9V19.808H203.316V33.12Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M304.538 55.264C304.538 57.2267 304.41 59.104 304.154 60.896H258.458C258.885 67.1253 261.487 70.24 266.266 70.24C269.338 70.24 271.557 68.832 272.922 66.016H303.002C301.978 71.136 299.802 75.744 296.474 79.84C293.231 83.8507 289.093 87.0507 284.058 89.44C279.109 91.744 273.647 92.896 267.674 92.896C260.506 92.896 254.106 91.4027 248.474 88.416C242.927 85.4293 238.575 81.1627 235.418 75.616C232.346 69.984 230.81 63.4133 230.81 55.904C230.81 48.3947 232.346 41.8667 235.418 36.32C238.575 30.688 242.927 26.3787 248.474 23.392C254.106 20.4053 260.506 18.912 267.674 18.912C274.842 18.912 281.199 20.4053 286.746 23.392C292.378 26.2933 296.73 30.4747 299.802 35.936C302.959 41.3973 304.538 47.84 304.538 55.264ZM275.738 48.48C275.738 46.0907 274.97 44.2987 273.434 43.104C271.898 41.824 269.978 41.184 267.674 41.184C262.639 41.184 259.695 43.616 258.842 48.48H275.738Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M345.653 92.896C338.826 92.896 332.768 91.7867 327.477 89.568C322.272 87.3493 318.133 84.2773 315.061 80.352C311.989 76.4267 310.24 71.9893 309.813 67.04H337.077C337.418 69.1733 338.314 70.752 339.765 71.776C341.301 72.8 343.221 73.312 345.525 73.312C346.976 73.312 348.128 73.0133 348.981 72.416C349.834 71.7333 350.261 70.9227 350.261 69.984C350.261 68.3627 349.365 67.2107 347.573 66.528C345.781 65.8453 342.752 65.0773 338.485 64.224C333.28 63.2 328.97 62.0907 325.557 60.896C322.229 59.7013 319.285 57.6533 316.725 54.752C314.25 51.8507 313.013 47.84 313.013 42.72C313.013 38.2827 314.165 34.272 316.469 30.688C318.858 27.0187 322.357 24.16 326.965 22.112C331.573 19.9787 337.162 18.912 343.733 18.912C353.461 18.912 361.056 21.3013 366.517 26.08C372.064 30.8587 375.392 37.088 376.501 44.768H351.285C350.858 42.8053 349.962 41.312 348.597 40.288C347.232 39.1787 345.397 38.624 343.093 38.624C341.642 38.624 340.533 38.9227 339.765 39.52C338.997 40.032 338.613 40.8427 338.613 41.952C338.613 43.4027 339.509 44.512 341.301 45.28C343.093 45.9627 345.952 46.688 349.877 47.456C355.082 48.48 359.477 49.632 363.061 50.912C366.645 52.192 369.76 54.4107 372.405 57.568C375.05 60.64 376.373 64.9067 376.373 70.368C376.373 74.6347 375.136 78.4747 372.661 81.888C370.186 85.3013 366.602 87.9893 361.909 89.952C357.301 91.9147 351.882 92.896 345.653 92.896Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M457.538 55.264C457.538 57.2267 457.41 59.104 457.154 60.896H411.458C411.885 67.1253 414.487 70.24 419.266 70.24C422.338 70.24 424.557 68.832 425.922 66.016H456.002C454.978 71.136 452.802 75.744 449.474 79.84C446.231 83.8507 442.093 87.0507 437.058 89.44C432.109 91.744 426.647 92.896 420.674 92.896C413.506 92.896 407.106 91.4027 401.474 88.416C395.927 85.4293 391.575 81.1627 388.418 75.616C385.346 69.984 383.81 63.4133 383.81 55.904C383.81 48.3947 385.346 41.8667 388.418 36.32C391.575 30.688 395.927 26.3787 401.474 23.392C407.106 20.4053 413.506 18.912 420.674 18.912C427.842 18.912 434.199 20.4053 439.746 23.392C445.378 26.2933 449.73 30.4747 452.802 35.936C455.959 41.3973 457.538 47.84 457.538 55.264ZM428.738 48.48C428.738 46.0907 427.97 44.2987 426.434 43.104C424.898 41.824 422.978 41.184 420.674 41.184C415.639 41.184 412.695 43.616 411.842 48.48H428.738Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M494.941 33.12C497.842 28.9387 501.384 25.6107 505.565 23.136C509.746 20.576 514.098 19.296 518.621 19.296V49.632H510.557C505.181 49.632 501.213 50.5707 498.653 52.448C496.178 54.3253 494.941 57.6533 494.941 62.432V92H466.525V19.808H494.941V33.12Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M562.883 64.992L574.403 19.808H604.611L580.547 92H545.091L521.027 19.808H551.235L562.883 64.992Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
				<path
					d="M608.31 55.904C608.31 48.3093 609.59 41.7387 612.15 36.192C614.795 30.56 618.379 26.2933 622.902 23.392C627.425 20.4053 632.502 18.912 638.134 18.912C642.827 18.912 646.881 19.8933 650.294 21.856C653.707 23.7333 656.31 26.336 658.102 29.664V19.808H686.39V92H658.102V82.144C656.31 85.472 653.707 88.1173 650.294 90.08C646.881 91.9573 642.827 92.896 638.134 92.896C632.502 92.896 627.425 91.4453 622.902 88.544C618.379 85.5573 614.795 81.2907 612.15 75.744C609.59 70.112 608.31 63.4987 608.31 55.904ZM658.102 55.904C658.102 52.064 657.121 49.0773 655.158 46.944C653.195 44.8107 650.678 43.744 647.606 43.744C644.534 43.744 642.017 44.8107 640.054 46.944C638.091 49.0773 637.11 52.064 637.11 55.904C637.11 59.744 638.091 62.7307 640.054 64.864C642.017 66.9973 644.534 68.064 647.606 68.064C650.678 68.064 653.195 66.9973 655.158 64.864C657.121 62.7307 658.102 59.744 658.102 55.904Z"
					stroke="white"
					stroke-width="2"
					mask="url(#path-1-outside-1_662_40)"
				/>
			</svg>

			<div className={styles.btnContainer}>
				<Link to="/home">
					<button>Ingresar</button>
				</Link>
				<Link to="/login">
					<button>Registrate</button>
				</Link>
			</div>

			<div className={styles.iconsContainer}>
				<div className={styles.iconsSubContainer}>
					<IoLogoWhatsapp
						onClick={(e) => changeInfoVisibility(0)}
						className={styles.icons}
					/>
					<p
						className={
							infoVisibility[0] ? styles.visibleInfo : styles.hiddenInfo
						}
					>
						1928374892
					</p>
				</div>

				<div className={styles.iconsSubContainer}>
					<IoLocation
						onClick={(e) => changeInfoVisibility(1)}
						className={styles.icons}
					/>
					<p
						className={
							infoVisibility[1] ? styles.visibleInfo : styles.hiddenInfo
						}
					>
						Calle falsa 123
					</p>
				</div>

				<div className={styles.iconsSubContainer}>
					<SiGmail
						onClick={(e) => changeInfoVisibility(2)}
						className={styles.icons}
					/>
					<p
						className={
							infoVisibility[2] ? styles.visibleInfo : styles.hiddenInfo
						}
					>
						emailfalso123@gmail.com
					</p>
				</div>
			</div>

			<img src={soccerBall} alt="soccerBall" className={styles.ball} />
		</div>
	);
}
