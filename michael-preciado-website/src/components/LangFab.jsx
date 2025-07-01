import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function LangFab({ side = 'left' }){
  const { i18n } = useTranslation();
  const [open,setOpen] = useState(false);
  const btnRef = useRef(null);

  const sideClass = side==='right' ? 'right-4' : 'left-4';

  return (
    <div className={`fixed top-4 ${sideClass} z-50`}>
      {/* rest of the component */}
    </div>
  );
}
