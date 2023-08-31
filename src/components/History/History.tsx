/** @format */

import "./history.scss";

type Props = {};
const Transaction = ({
  price,
  name,
  time,
}: {
  price: number;
  name: string;
  time: string;
}) => {
  return (
    <article className='transaction'>
      <div className='transaction-block'>
        <h3 className='transaction-block__status'>
          Выполнено
        </h3>
        <p className='transaction-block__price'>
          {price} тг
        </p>
        <p className='transaction-block__name'>{name}</p>
      </div>
      <time className='transaction-time' dateTime={time}>
        {time}
      </time>
    </article>
  );
};

export const History = (props: Props) => {
  return (
    <div className='history'>
      <h3>История пополнений</h3>
      <div className='history-block'>
        <Transaction
          price={200}
          name='Пополнение баланса'
          time='27.07.23 10:10'
        />
        <Transaction
          price={200}
          name='Пополнение баланса'
          time='27.07.23 10:10'
        />
      </div>
    </div>
  );
};
