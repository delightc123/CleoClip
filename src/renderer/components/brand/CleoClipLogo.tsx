import lockupUrl from '../../../../resources/cleoclip-logo.svg'
import iconUrl from '../../../../resources/cleoclip-icon-small.svg'
import markUrl from '../../../../resources/bridgemind-mark.svg'
import { cn } from '../../lib/utils'

interface CleoClipLogoProps {
  /**
   * lockup: CleoClip wordmark (artwork is for dark surfaces).
   * icon:   the app icon tile.
   * mark:   the mark alone, for tight spaces such as the collapsed sidebar.
   */
  variant?: 'lockup' | 'icon' | 'mark'
  /** Size by height (e.g. "h-6"); width follows the artwork. */
  className?: string
  alt?: string
}

/**
 * CleoClip brand artwork.
 */
export function CleoClipLogo({ variant = 'lockup', className, alt = 'CleoClip' }: CleoClipLogoProps): React.JSX.Element {
  return (
    <img
      src={variant === 'icon' ? iconUrl : variant === 'mark' ? markUrl : lockupUrl}
      alt={alt}
      draggable={false}
      className={cn('w-auto shrink-0 select-none', className)}
    />
  )
}

export const BridgeClipLogo = CleoClipLogo
export type BridgeClipLogoProps = CleoClipLogoProps
