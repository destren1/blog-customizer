import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [pageData, setPageData] = useState(defaultArticleState);

	const handleToggleSideBarState = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageData.fontFamilyOption.value,
					'--font-size': pageData.fontSizeOption.value,
					'--font-color': pageData.fontColor.value,
					'--container-width': pageData.contentWidth.value,
					'--bg-color': pageData.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				toggleSideBar={handleToggleSideBarState}
				setPageData={setPageData}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
