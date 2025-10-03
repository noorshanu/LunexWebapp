import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const PopupModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'max-w-xl',
  showCloseButton = true,
  closeOnBackdropClick = true 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeOnBackdropClick ? onClose : undefined}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`bg-[#000000] border border-[#34FCB4]   px-10  w-full ${maxWidth} relative`}
              onClick={(e) => e.stopPropagation()}
            >
        <div className='border-r-2 border-l-2 border-[#2D2C2D] px-6 py-6'>
                {/* Header */}
                {title && (
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">{title}</h2>
                  {showCloseButton && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      <HiX className="w-6 h-6" />
                    </motion.button>
                  )}
                </div>
              )}

              {/* Content */}
              {children}
        </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
