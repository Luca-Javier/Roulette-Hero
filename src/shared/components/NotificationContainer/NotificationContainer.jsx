import { useNotification } from "@contexts/useNotification"
import styles from "./index.module.css"

function NotificationContainer() {
	const { content, isVisible, close } = useNotification()

	return (
		<article
			onClick={close}
			className={`${styles.notifyContainer} ${
				isVisible && (isVisible ? styles.isActive : styles.isDesactive)
			}`}>
			<div className={styles.notify}>{content}</div>
		</article>
	)
}

export default NotificationContainer
