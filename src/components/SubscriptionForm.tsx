import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { subscribeUser } from '../store/reducers/subscriptionReducer';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function SubscriptionForm() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.subscription.status);
  const errorMessage = useAppSelector((state) => state.subscription.errorMessage);
  const [email, setEmail] = useState('');

  const failureTitle = t('subscribeResponse.failure.title');
  const successTitle = t('subscribeResponse.success.title');
  const successMessage = t('subscribeResponse.success.message');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email) {
      dispatch(subscribeUser(email));
    }
  };

  return (
    <div>
      <p>{t('subscriptionInfo')}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={t('email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{t('register')}</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && errorMessage && <p>{`${failureTitle}: ${errorMessage}`}</p>}
      {status === 'success' && <p>{`${successTitle}: ${successMessage}`}</p>}
    </div>
  );
}

export default SubscriptionForm;
