import styles from "./flexscroll.module.css";
export function Resource({ link, thumb, cardTag, alttext, doctitle, linkCopy }) {
  return (
    <>
      <li className={(styles.card)}>

        <div>
          <div variant="primary" className={(styles.cardTag)}>{(cardTag)}</div>
          <img
            className={styles.cardImage}
            src={(thumb)}
            alt={(alttext)}
          />
          <div className={(styles.cardContent)}>
            {(doctitle)}
          </div>

          <div className={(styles.cardLinkWrapper)}>
            <a href="" className={(styles.cardLink)}>{(linkCopy)}</a>
          </div>

        </div>
      </li>
    </>
  );
}

const FlexScroll = () => {
  return (
    <>
   <div className={(styles.cardsWrapper)}>
          <ul className={(styles.cards)}>
            <Resource
              link={'https://google.com'}
              cardTag={'Sell Sheet'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
              <Resource
              link={'https://google.com'}
              cardTag={'NEW'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
              <Resource
              link={'https://google.com'}
              cardTag={'tag'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
              <Resource
              link={'https://google.com'}
              cardTag={'NEW'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
              <Resource
              link={'https://google.com'}
              cardTag={'NEW'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
               
              <Resource
              link={'https://google.com'}
              cardTag={'NEW'}
              thumb={'https://via.placeholder.com/300x300'}
              alttext={'some alt text'}
              doctitle={'Sell Sheet Title'}
              linkCopy={'Download'}
            />     
    </ul>
    </div>
    </>
  )
}

export default FlexScroll;
