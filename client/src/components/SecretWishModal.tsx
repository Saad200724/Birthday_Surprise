import { motion, AnimatePresence } from "framer-motion";

interface SecretWishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCarAnimation: () => void;
}

export default function SecretWishModal({ isOpen, onClose, onCarAnimation }: SecretWishModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content bg-white rounded-3xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full mx-4 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-4 sm:space-y-6">
              <motion.h2
                className="font-great-vibes text-2xl sm:text-3xl md:text-4xl text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Your Secret Wish 💫
              </motion.h2>
              
              <motion.div
                className="space-y-3 sm:space-y-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="font-caveat text-sm sm:text-base leading-relaxed px-2 space-y-2">
                  <p>Happy Birthday, amar best bandhubi</p>
                  <p>Ajker din ta hok tor jibon er shobcheye special.</p>
                  <p>Tui jemon ekjon shotti friend, emon friend paoa shotti lucky feel kori.</p>
                  <p>Tor sathe je shob moment gulo share korechi — hasci, adda, jhamela — sob ekta ekta memory hoye roye gese. 😄</p>
                  <p>Tui ja chai, ja shopno dekhos, sob kisui jeno puron hoy.</p>
                  <p>Always stay happy, confident, ar tor motoi ekta amazing manus.</p>
                  <p>Onek onek bhalobasha & treat dibi must! 💖🎉</p>
                </div>
                <p className="font-inter text-xs sm:text-sm italic text-gray-500">
                  - From your best friend
                </p>
              </motion.div>
              
              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                  onClick={onCarAnimation}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="hidden sm:inline">🏎️ Take a Ride to Your Dreams</span>
                  <span className="sm:hidden">🏎️ Take a Ride</span>
                </motion.button>
                <motion.button
                  className="w-full bg-gray-100 text-gray-700 font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:bg-gray-200 text-sm sm:text-base"
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Celebration
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
