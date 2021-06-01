import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Index() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      Hello From News for ID {router.query.id}
    </div>
  )
}
