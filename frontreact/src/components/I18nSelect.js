import React from 'react';
import { LOCALES } from '../i18n/locales';
export const I18nSelect = ({change}) => {
  return (<>
  <select name="language" id="language" onChange={(e) => {change(e.target.value)}}>
    <option value={LOCALES.ENGLISH}>English</option>
    <option value={LOCALES.SPANISH}>Spanish</option>
  </select></>);
};
