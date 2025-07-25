/**
 * ProofCanvas - Advanced HTML5 Game Framework
 * A comprehensive, LLM-optimized game framework built on HTML5 Canvas
 * Designed for both pixel-perfect games and vector art with advanced features
 * 
 * 🏗️ FRAMEWORK ARCHITECTURE:
 * ========================
 * 
 * 🎯 CORE SYSTEMS:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ GameFramework (Main Controller + Content Pack Management)      │
 * │ ├── AssetManager (Lazy loading + Content packs + Caching)      │
 * │ ├── SoundManager (3D Audio + Lazy loading via Howler.js)       │
 * │ ├── InputManager (Mouse/Keyboard/Touch with event delegation)  │
 * │ ├── Renderer (Canvas drawing with optimization)                │
 * │ ├── StateManager (Game states: menu, playing, paused)          │
 * │ ├── ParticleSystem (Light/Image particles with emitters)       │
 * │ ├── EffectsManager (Screen shake, flash, zoom effects)         │
 * │ ├── TweenManager (Animation system with easing)                │
 * │ ├── UIManager (Canvas-based UI - use HTML/jQuery instead)      │
 * │ └── CollisionManager (AABB/Circle collision detection)         │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🎨 RENDERING PIPELINE:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ 1. Clear Canvas → 2. Update State → 3. Render Objects          │
 * │ 4. Apply Effects → 5. Render Particles → 6. Present Frame      │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🏃‍♂️ ANIMATION SYSTEM:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Spritesheet → AnimationPlayer → GameState.render()             │
 * │ - Frame-based animations with JSON configuration               │
 * │ - Support for walk cycles (north/south/east/west)              │
 * │ - Idle and action states with auto-transitions                 │
 * │ - getCurrentFrame() returns frame index for rendering          │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 💥 PARTICLE SYSTEM:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Types: 'light' (colored circles) | 'image' (sprite-based)      │
 * │ Spawn Shapes: circle, rectangle, line                          │
 * │ Properties: velocity, gravity, fadeOut, lifetime, size         │
 * │ Emitters: createEmitter() → start/stop → removeEmitter()       │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🎭 EFFECTS SYSTEM:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Screen Shake: addScreenShake(intensity, duration)              │
 * │ Screen Flash: addScreenFlash(color, intensity, duration)       │
 * │ Zoom Punch: addZoomPunch(intensity, duration)                  │
 * │ All effects stack and automatically clean up                   │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🔊 AUDIO SYSTEM (Howler.js Integration):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ SoundManager - Comprehensive 3D audio with lazy loading        │
 * │ ├── 3D Spatial Audio: Distance attenuation + stereo panning   │
 * │ ├── Volume Mixing: master/music/sfx/voice categories          │
 * │ ├── Lazy Loading: Load sounds on-demand or via content packs  │
 * │ ├── Priority System: High/medium/low loading priorities       │
 * │ ├── Concurrency Control: Configurable concurrent load limits  │
 * │ ├── Memory Management: Unload sounds to free memory           │
 * │ └── Cross-browser Support: Web Audio API + HTML5 fallback     │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 📦 CONTENT PACK SYSTEM (Lazy Loading):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Unified asset management for large games and DLC content       │
 * │ ├── Registration: Define content packs without loading         │
 * │ ├── On-demand Loading: Load packs when entering new areas      │
 * │ ├── Priority Loading: High/medium/low priority assets          │
 * │ ├── Lazy Asset Access: Auto-load when first accessed           │
 * │ ├── Preload Queues: Background loading during idle time        │
 * │ ├── Memory Cleanup: Unload unused packs to free memory         │
 * │ ├── Event System: jQuery/DOM events for loading progress       │
 * │ └── Statistics: Real-time loading stats and memory usage       │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🚀 LAZY LOADING WORKFLOW:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ 1. Register Pack → 2. Load on Demand → 3. Lazy Access          │
 * │ 4. Preload Hints → 5. Memory Cleanup → 6. Repeat Cycle         │
 * │                                                                 │
 * │ Example Usage:                                                  │
 * │ game.registerContentPack('level2', { assets: [...] })          │
 * │ await game.loadContentPack('level2')  // When entering level   │
 * │ await game.assetManager.lazyLoad('boss')  // Auto-load asset   │
 * │ game.preloadAssets(['level3_assets'], 'medium')  // Background │
 * │ game.unloadContentPack('level1')  // Free memory              │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * 🎯 LLM OPTIMIZATION PHILOSOPHY:
 * 
 * UI DEVELOPMENT STRATEGY:
 * ========================
 * For optimal LLM code generation, ALL user interface elements should be created using 
 * HTML/CSS/jQuery rather than the canvas-based UIManager system. This approach provides:
 * 
 * ✅ BENEFITS OF HTML/CSS/jQuery UI:
 * - Better accessibility and responsive design
 * - Easier styling with CSS animations and transitions
 * - DOM manipulation that LLMs understand intuitively
 * - Built-in browser features (scrolling, forms, modals)
 * - Superior text rendering and typography
 * - Native mobile touch handling
 * - SEO-friendly content structure
 * - Better debugging and inspection tools
 * 
 * 🎨 RECOMMENDED UI ARCHITECTURE:
 * - Use ProofCanvas for: Game world rendering, particles, sprites, effects
 * - Use HTML/CSS/jQuery for: Menus, HUD, dialogs, forms, inventory grids
 * - Coordinate between both: jQuery events trigger canvas effects
 * 
 * 📚 LLM-FRIENDLY PATTERNS:
 * ```javascript
 * // ✅ GOOD - HTML/jQuery UI that LLMs generate easily:
 * $('#shopButton').click(() => {
 *   $('#shopModal').fadeIn();
 *   game.effectsManager.addScreenFlash('#gold', 0.3);
 * });
 * 
 * // ❌ AVOID - Complex canvas UI that's harder for LLMs:
 * const button = new UIButton(x, y, w, h, 'Shop');
 * ```
 * 
 * 🔧 FRAMEWORK USAGE EXAMPLES:
 * ```javascript
 * // Initialize game
 * const game = new ProofCanvas.GameFramework({
 *   width: 800, height: 600,
 *   container: document.getElementById('gameContainer')
 * });
 * 
 * // ==================== CONTENT PACK SYSTEM ====================
 * // Register content packs for lazy loading
 * game.registerContentPack('level1', {
 *   assets: [
 *     { name: 'player', url: 'assets/player.png', type: 'image', priority: 'high' },
 *     { name: 'enemies', url: 'assets/enemies.png', type: 'image', priority: 'medium' }
 *   ],
 *   sounds: [
 *     { name: 'bgmusic', url: 'audio/level1.mp3', priority: 'low' },
 *     { name: 'shoot', url: 'audio/shoot.wav', priority: 'high' }
 *   ]
 * });
 * 
 * // Load content pack when entering level
 * await game.loadContentPack('level1');
 * 
 * // Lazy load individual assets when needed
 * const playerSprite = await game.assetManager.lazyLoad('player');
 * 
 * // ==================== AUDIO SYSTEM ====================
 * // Play 3D positioned sounds
 * game.soundManager.playSound('shoot', { 
 *   x: enemy.x, y: enemy.y, volume: 0.8 
 * });
 * 
 * // Play background music with looping
 * await game.soundManager.playMusic('bgmusic', null, { loop: true });
 * 
 * // Lazy play sounds (loads if needed)
 * await game.soundManager.playLazySound('explosion');
 * 
 * // Volume control by category
 * game.soundManager.setVolume('master', 0.7);
 * game.soundManager.setVolume('sfx', 0.5);
 * 
 * // Set listener position (usually player position)
 * game.soundManager.setListenerPosition(player.x, player.y);
 * 
 * // ==================== SPRITES & ANIMATION ====================
 * // Load sprites with animations
 * const gladiatorImage = await game.assetManager.loadImage('gladiator', 'assets/gladiator.png');
 * const spritesheet = new ProofCanvas.Spritesheet(gladiatorImage, {
 *   frameWidth: 48, frameHeight: 48,
 *   animations: {
 *     "walk_north": { frames: [0, 1, 2], frameDuration: 0.2, loop: true },
 *     "idle_south": { frames: [11], frameDuration: 1, loop: true }
 *   }
 * }, game);
 * const animPlayer = spritesheet.createAnimationPlayer({
 *   defaultAnimation: 'idle_south', autoPlay: true
 * });
 * 
 * // Render sprites in game state
 * render(renderer) {
 *   const frame = animPlayer.getCurrentFrame();
 *   if (frame !== null) {
 *     renderer.drawSprite(spritesheet, frame, x, y, {width: 48, height: 48});
 *   }
 * }
 * 
 * // ==================== EFFECTS & PARTICLES ====================
 * // Create particle effects
 * const emitter = game.particleSystem.createEmitter({
 *   x: 400, y: 300, type: 'light', rate: 100, lifetime: 2.0,
 *   velocity: { min: 100, max: 200, spread: Math.PI * 2 },
 *   color: { r: 255, g: 100, b: 100, a: 1 },
 *   fadeOut: true, spawnShape: 'circle'
 * });
 * 
 * // Screen effects
 * game.effectsManager.addScreenShake(15, 0.5);
 * game.effectsManager.addScreenFlash('#ffaa00', 0.8, 0.3);
 * 
 * // Tween animations
 * game.tweenManager.to(object, { x: 100, y: 200 }, 1.0, {
 *   easing: 'easeOutQuad', onComplete: () => console.log('Done!')
 * }).start();
 * 
 * // ==================== MEMORY MANAGEMENT ====================
 * // Preload next level assets during gameplay
 * game.preloadAssets(['level2_bg', 'level2_enemies'], ['level2_music'], 'medium');
 * 
 * // Process preload queue in game loop
 * await game.processPreloadQueues(1, 1); // 1 asset, 1 sound per frame
 * 
 * // Unload previous level to free memory
 * game.unloadContentPack('level1');
 * 
 * // Get loading statistics
 * const stats = game.getContentPackStats();
 * console.log(`Loaded: ${stats.memoryUsage.loadedAssets} assets, ${stats.memoryUsage.loadedSounds} sounds`);
 * ```
 * 
 * 🔧 AUTOMATIC LIBRARY LOADING:
 * jQuery is automatically loaded and available as $ or jQuery.
 * Howler.js is automatically loaded for comprehensive audio support.
 * Extended with game-specific helpers: $.gameNotify(), .gameButton(), 
 * .gameProgressBar(), .gameModal(), $.gameExplode()
 * 
 * 📊 CONTENT PACK EVENTS:
 * Listen for loading events with jQuery:
 * ```javascript
 * $(document).on('contentpack:loaded', (e, data) => {
 *   console.log(`Pack '${data.packName}' loaded successfully`);
 * });
 * $(document).on('contentpack:error', (e, data) => {
 *   console.error(`Failed to load '${data.packName}': ${data.error.message}`);
 * });
 * ```
 * 
 * @author AI-Generated Game Framework
 * @version 3.0.0
 * @requires jQuery (automatically loaded)
 * @requires Howler.js (automatically loaded)
 */

// Auto-load jQuery if not already present
if (typeof jQuery === 'undefined') {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
    jqueryScript.integrity = 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=';
    jqueryScript.crossOrigin = 'anonymous';
    document.head.appendChild(jqueryScript);
}

// Auto-load Howler.js if not already present
if (typeof Howl === 'undefined') {
    const howlerScript = document.createElement('script');
    howlerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js';
    howlerScript.crossOrigin = 'anonymous';
    document.head.appendChild(howlerScript);
}

/**
 * Main GameFramework class - Entry point for all game functionality
 * 
 * 🎮 CORE CANVAS FEATURES:
 * - State management (loading, menu, game, shop, etc.)
 * - High-performance canvas rendering with scaling
 * - Spritesheet animations and image support
 * - Particle systems (light and image particles)
 * - Advanced tweening library with 15+ easing functions
 * - Game juicing effects (screen shake, flash, zoom)
 * - Time manipulation (slow-mo, bullet-time effects)
 * - Pre/post processing effects pipeline
 * - Tile-based world optimization with culling
 * 
 * 🎨 LLM-OPTIMIZED UI INTEGRATION:
 * The framework is designed to work seamlessly with HTML/CSS/jQuery UI:
 * 
 * @example
 * // Initialize framework
 * const game = new ProofCanvas.GameFramework('gameContainer', 800, 600);
 * 
 * // Create HTML UI (LLM-friendly approach)
 * $('body').append(`
 *   <div id="gameHUD">
 *     <button id="startBtn">Start Game</button>
 *     <div id="healthBar" class="progress-bar"></div>
 *   </div>
 * `);
 * 
 * // Connect jQuery events to canvas effects
 * $('#startBtn').click(() => {
 *   game.setState('playing');
 *   game.effectsManager.addScreenFlash('#00ff00', 0.5);
 * });
 * 
 * // Use canvas for game world rendering
 * class GameState extends ProofCanvas.GameState {
 *   render(renderer) {
 *     renderer.drawSprite(player, x, y);
 *     // HTML UI automatically overlays canvas
 *   }
 * }
 * 
 * 📋 UI BEST PRACTICES FOR LLMs:
 * ✅ DO: Use HTML for menus, forms, HUD elements, modals
 * ✅ DO: Use CSS for styling, animations, responsive design  
 * ✅ DO: Use jQuery for DOM manipulation and events
 * ✅ DO: Use canvas for sprites, particles, game world
 * ❌ AVOID: Complex canvas UI that's harder to generate/modify
 */
class GameFramework {
    /**
     * Initialize the game framework with LLM-optimized UI integration
     * 
     * 🎯 LLM TIP: This constructor only handles canvas setup. For UI elements,
     * use jQuery to create HTML elements that overlay the canvas:
     * 
     * @param {string|Object} containerIdOrConfig - Container element ID or config object
     * @param {number} [width=800] - Canvas width (when using ID as first param)
     * @param {number} [height=600] - Canvas height (when using ID as first param)
     * 
     * @param {Object} config - Configuration object (when used as first param)
     * @param {number} config.width - Canvas width
     * @param {number} config.height - Canvas height
     * @param {boolean} [config.pixelPerfect=false] - Enable pixel-perfect rendering
     * @param {HTMLElement} [config.container=document.body] - Container element
     * @param {boolean} [config.autoScale=true] - Enable automatic scaling
     * @param {string} [config.scaleMode='fit'] - Scale mode: 'fit', 'fill', 'stretch', 'none'
     * @param {boolean} [config.autoCenter=true] - Automatically center canvas in container
     * 
     * @example
     * // Simple initialization (LLM-friendly)
     * const game = new ProofCanvas.GameFramework('gameContainer', 800, 600);
     * 
     * // Advanced configuration
     * const game = new ProofCanvas.GameFramework({
     *   width: 1024,
     *   height: 768,
     *   pixelPerfect: true,
     *   container: $('#gameArea')[0]
     * });
     * 
     * // Immediately create HTML UI with jQuery
     * $(document).ready(() => {
     *   $('#gameContainer').after(`
     *     <div id="gameUI">
     *       <button class="btn-start">Start Game</button>
     *       <div class="health-bar"></div>
     *     </div>
     *   `);
     * });
     */
    constructor(config = {}) {
        this.config = {
            width: 800,
            height: 600,
            pixelPerfect: false,
            container: document.body,
            autoScale: true,
            scaleMode: 'fit',
            autoCenter: true,
            ...config
        };

        // Core systems
        this.canvas = null;
        this.ctx = null;
        this.renderer = null;
        this.assetManager = null;
        this.particleSystem = null;
        this.tweenManager = null;
        this.effectsManager = null;
        this.timeManager = null;
        
        // State management
        this.states = new Map();
        this.currentState = null;
        this.nextState = null;
        
        // Game loop
        this.isRunning = false;
        this.lastTime = 0;
        this.deltaTime = 0;
        this.fps = 0;
        this.frameCount = 0;
        
        this._init();
    }

    /**
     * Initialize all core systems
     * @private
     */
    _init() {
        this._createCanvas();
        this.renderer = new Renderer(this);
        this.assetManager = new AssetManager(this);
        this.renderCache = new RenderCache(this);
        this.particleSystem = new ParticleSystem(this);
        this.tweenManager = new TweenManager(this);
        this.effectsManager = new EffectsManager(this);
        this.timeManager = new TimeManager(this);
        this.input = new InputManager(this);
        this.uiManager = new UIManager(this);
        this.soundManager = new SoundManager(this);
        
        // LLM-optimized jQuery integration
        this._setupJQueryHelpers();
    }

    /**
     * Setup jQuery helpers and LLM-optimized UI utilities
     * @private
     */
    _setupJQueryHelpers() {
        // Wait for jQuery to be available
        const setupHelpers = () => {
            if (typeof jQuery === 'undefined') {
                setTimeout(setupHelpers, 100);
                return;
            }
            
            // Add game reference to jQuery for easy access
            $.game = this;
            
            // LLM-friendly jQuery extensions for common game UI patterns
            $.fn.extend({
                /**
                 * Create a game button with effects
                 * @param {Object} options - Button configuration
                 * @returns {jQuery} The button element
                 */
                gameButton: function(options = {}) {
                    const defaults = {
                        text: 'Button',
                        onClick: () => {},
                        effects: true,
                        classes: 'btn btn-primary'
                    };
                    const opts = $.extend(defaults, options);
                    
                    return this.addClass(opts.classes)
                        .text(opts.text)
                        .click(() => {
                            if (opts.effects) {
                                $.game.effectsManager.addScreenFlash('#00d4ff', 0.3, 0.1);
                            }
                            opts.onClick();
                        });
                },
                
                /**
                 * Create a progress bar with game-style animations
                 * @param {number} value - Progress value (0-100)
                 * @param {Object} options - Progress bar configuration
                 */
                gameProgressBar: function(value = 0, options = {}) {
                    const defaults = {
                        animated: true,
                        color: '#00d4ff',
                        height: '20px'
                    };
                    const opts = $.extend(defaults, options);
                    
                    const bar = $('<div class="progress-bar-container">').css({
                        width: '100%',
                        height: opts.height,
                        background: '#333',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    });
                    
                    const fill = $('<div class="progress-bar-fill">').css({
                        height: '100%',
                        background: opts.color,
                        width: value + '%',
                        transition: opts.animated ? 'width 0.3s ease' : 'none'
                    });
                    
                    bar.append(fill);
                    this.append(bar);
                    
                    // Add update method
                    bar.updateProgress = (newValue) => {
                        fill.css('width', Math.max(0, Math.min(100, newValue)) + '%');
                    };
                    
                    return bar;
                },
                
                /**
                 * Create a modal dialog with game styling
                 * @param {Object} options - Modal configuration
                 */
                gameModal: function(options = {}) {
                    const defaults = {
                        title: 'Modal',
                        content: '',
                        closeButton: true,
                        backdrop: true,
                        effects: true
                    };
                    const opts = $.extend(defaults, options);
                    
                    const modal = $(`
                        <div class="game-modal" style="
                            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                            background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
                            display: flex; align-items: center; justify-content: center;
                            z-index: 10000;
                        ">
                            <div class="modal-content" style="
                                background: linear-gradient(135deg, #1a1a2e, #16213e);
                                border: 2px solid #00d4ff; border-radius: 15px;
                                padding: 30px; max-width: 600px; max-height: 80vh;
                                overflow-y: auto; position: relative;
                            ">
                                ${opts.closeButton ? '<span class="close" style="position: absolute; right: 15px; top: 10px; font-size: 24px; cursor: pointer; color: #aaa;">&times;</span>' : ''}
                                <h2 style="color: #00d4ff; margin-top: 0;">${opts.title}</h2>
                                <div class="modal-body">${opts.content}</div>
                            </div>
                        </div>
                    `);
                    
                    // Close functionality
                    modal.find('.close').click(() => modal.fadeOut());
                    if (opts.backdrop) {
                        modal.click((e) => {
                            if (e.target === modal[0]) modal.fadeOut();
                        });
                    }
                    
                    // Effects
                    if (opts.effects) {
                        $.game.effectsManager.addScreenFlash('#00d4ff', 0.2, 0.1);
                    }
                    
                    $('body').append(modal);
                    modal.fadeIn();
                    
                    return modal;
                }
            });
            
            // Global jQuery helpers for game development
            $.extend({
                /**
                 * Show a game notification
                 * @param {string} message - Notification message
                 * @param {string} type - Notification type (success, error, info, warning)
                 * @param {number} duration - Display duration in ms
                 */
                gameNotify: function(message, type = 'info', duration = 3000) {
                    const notification = $(`
                        <div class="game-notification" style="
                            position: fixed; top: 20px; right: 20px; z-index: 20000;
                            padding: 15px 20px; border-radius: 10px; color: white;
                            font-weight: 600; opacity: 0; transform: translateX(100%);
                            transition: all 0.3s ease; max-width: 400px;
                        ">${message}</div>
                    `);
                    
                    const colors = {
                        success: 'linear-gradient(45deg, #2ecc71, #27ae60)',
                        error: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                        info: 'linear-gradient(45deg, #3498db, #2980b9)',
                        warning: 'linear-gradient(45deg, #f39c12, #e67e22)'
                    };
                    
                    notification.css('background', colors[type] || colors.info);
                    $('body').append(notification);
                    
                    // Show animation
                    setTimeout(() => {
                        notification.css({ opacity: 1, transform: 'translateX(0)' });
                    }, 100);
                    
                    // Auto hide
                    setTimeout(() => {
                        notification.css({ opacity: 0, transform: 'translateX(100%)' });
                        setTimeout(() => notification.remove(), 300);
                    }, duration);
                    
                    return notification;
                },
                
                /**
                 * Create particle explosion at jQuery element position
                 * @param {jQuery} element - Element to explode from
                 * @param {Object} options - Particle options
                 */
                gameExplode: function(element, options = {}) {
                    const offset = element.offset();
                    const centerX = offset.left + element.width() / 2;
                    const centerY = offset.top + element.height() / 2;
                    
                    // Convert to canvas coordinates
                    const canvasRect = $.game.canvas.getBoundingClientRect();
                    const x = centerX - canvasRect.left;
                    const y = centerY - canvasRect.top;
                    
                    const defaults = {
                        particles: 50,
                        color: { r: 0, g: 212, b: 255, a: 1 },
                        size: { min: 2, max: 6 },
                        velocity: { min: 50, max: 150, spread: Math.PI * 2 }
                    };
                    const opts = $.extend(defaults, options);
                    
                    const emitter = $.game.particleSystem.createEmitter({
                        x: x,
                        y: y,
                        type: 'light',
                        rate: opts.particles * 10,
                        lifetime: 1.5,
                        velocity: opts.velocity,
                        color: opts.color,
                        size: opts.size,
                        gravity: { x: 0, y: 30 },
                        fadeOut: true,
                        spawnShape: 'circle',
                        spawnArea: { radius: 10 }
                    });
                    
                    setTimeout(() => {
                        emitter.stop();
                        $.game.particleSystem.removeEmitter(emitter);
                    }, 150);
                }
            });
        };
        
        setupHelpers();
    }

    /**
     * Create and setup the canvas element
     * @private
     */
    _createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;
        this.canvas.style.display = 'block';
        
        // Remove margin when using flexbox centering
        if (this.config.autoCenter) {
            this.canvas.style.margin = '0';
        }
        
        if (this.config.pixelPerfect) {
            this.canvas.style.imageRendering = 'pixelated';
            this.canvas.style.imageRendering = 'crisp-edges';
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = !this.config.pixelPerfect;
        
        this.config.container.appendChild(this.canvas);
        
        // Ensure container has proper setup for centering (if enabled)
        if (this.config.autoCenter) {
            this._setupContainer();
        }
        
        if (this.config.autoScale) {
            this._setupScaling();
        }
    }

    /**
     * Setup container for proper canvas centering
     * @private
     */
    _setupContainer() {
        const container = this.config.container;
        
        // Store original styles if they exist
        this._originalContainerStyles = {
            display: container.style.display || '',
            justifyContent: container.style.justifyContent || '',
            alignItems: container.style.alignItems || '',
            textAlign: container.style.textAlign || ''
        };
        
        // Always use flexbox for reliable centering
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    }

    /**
     * Setup automatic canvas scaling
     * @private
     */
    _setupScaling() {        
        const resize = () => {
            const rect = this.config.container.getBoundingClientRect();
            const scaleX = rect.width / this.config.width;
            const scaleY = rect.height / this.config.height;
            
            let scale;
            switch (this.config.scaleMode) {
                case 'fit':
                    scale = Math.min(scaleX, scaleY);
                    break;
                case 'fill':
                    scale = Math.max(scaleX, scaleY);
                    break;
                case 'stretch':
                    this.canvas.style.width = rect.width + 'px';
                    this.canvas.style.height = rect.height + 'px';
                    this.canvas.style.margin = '0';
                    return;
                case 'none':
                    this.canvas.style.margin = '0';
                    return;
                default:
                    scale = Math.min(scaleX, scaleY);
            }
            
            const scaledWidth = this.config.width * scale;
            const scaledHeight = this.config.height * scale;
            
            this.canvas.style.width = scaledWidth + 'px';
            this.canvas.style.height = scaledHeight + 'px';
            this.canvas.style.margin = '0';
        };
        
        window.addEventListener('resize', resize);
        resize();
    }

    /**
     * Add a game state
     * @param {string} name - State name
     * @param {GameState} state - State instance
     */
    addState(name, state) {
        this.states.set(name, state);
        state.game = this;
    }

    /**
     * Switch to a different state
     * @param {string} name - State name to switch to
     */
    setState(name) {
        if (!this.states.has(name)) {
            throw new Error(`State '${name}' not found`);
        }
        this.nextState = name;
    }

    /**
     * Process state transitions
     * @private
     */
    _updateStates() {
        if (this.nextState) {
            if (this.currentState) {
                this.states.get(this.currentState).exit();
            }
            
            this.currentState = this.nextState;
            this.nextState = null;
            this.states.get(this.currentState).enter();
        }
    }

    /**
     * Start the game loop
     */
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.lastTime = performance.now();
        this._gameLoop();
    }

    /**
     * Stop the game loop
     */
    stop() {
        this.isRunning = false;
    }

    /**
     * Register a content pack for lazy loading
     * @param {string} packName - Content pack identifier
     * @param {Object} packConfig - Pack configuration
     * @example
     * game.registerContentPack('level2', {
     *   assets: [
     *     { name: 'boss', url: 'level2/boss.png', type: 'image', priority: 'high' },
     *     { name: 'level2_tiles', url: 'level2/tiles.png', type: 'spritesheet', 
     *       config: { frameWidth: 32, frameHeight: 32 }, priority: 'medium' }
     *   ],
     *   sounds: [
     *     { name: 'boss_music', url: 'level2/boss.mp3', priority: 'high' },
     *     { name: 'level_ambient', url: 'level2/ambient.mp3', priority: 'low' }
     *   ]
     * });
     */
    registerContentPack(packName, packConfig) {
        // Register with AssetManager
        this.assetManager.registerContentPack(packName, packConfig);
        
        // Register sounds with SoundManager
        if (packConfig.sounds) {
            this.soundManager.registerLazySounds(packName, packConfig.sounds);
        }
        
        console.log(`Content pack '${packName}' registered successfully`);
    }

    /**
     * Load a content pack on demand
     * @param {string} packName - Content pack to load
     * @param {Object} options - Loading options
     * @returns {Promise<void>} Promise resolving when pack is loaded
     */
    async loadContentPack(packName, options = {}) {
        console.log(`Loading content pack '${packName}'...`);
        
        try {
            // Load assets and sounds concurrently
            await this.assetManager.loadContentPack(packName, options);
            console.log(`Content pack '${packName}' loaded successfully`);
            
            // Trigger custom event for pack loading completion
            this._triggerPackLoadEvent(packName, 'loaded');
            
        } catch (error) {
            console.error(`Failed to load content pack '${packName}':`, error);
            this._triggerPackLoadEvent(packName, 'error', error);
            throw error;
        }
    }

    /**
     * Unload a content pack to free memory
     * @param {string} packName - Content pack to unload
     */
    unloadContentPack(packName) {
        this.assetManager.unloadContentPack(packName);
        this.soundManager.unloadContentPackSounds(packName);
        
        this._triggerPackLoadEvent(packName, 'unloaded');
        console.log(`Content pack '${packName}' unloaded`);
    }

    /**
     * Preload specific assets/sounds based on game state
     * @param {Array} assetNames - Asset names to preload
     * @param {Array} soundNames - Sound names to preload
     * @param {string} priority - Priority level
     */
    preloadAssets(assetNames = [], soundNames = [], priority = 'medium') {
        if (assetNames.length > 0) {
            this.assetManager.addToPreloadQueue(assetNames, priority);
        }
        
        if (soundNames.length > 0) {
            this.soundManager.addSoundsToPreloadQueue(soundNames, priority);
        }
        
        console.log(`Added ${assetNames.length} assets and ${soundNames.length} sounds to preload queue`);
    }

    /**
     * Process preload queues during idle time (call this in your game loop)
     * @param {number} maxAssets - Maximum assets to preload per frame
     * @param {number} maxSounds - Maximum sounds to preload per frame
     */
    async processPreloadQueues(maxAssets = 1, maxSounds = 1) {
        // Process both queues concurrently during idle time
        await Promise.allSettled([
            this.assetManager.processPreloadQueue(maxAssets),
            this.soundManager.processSoundPreloadQueue(maxSounds)
        ]);
    }

    /**
     * Get comprehensive loading statistics
     * @returns {Object} Combined loading stats
     */
    getContentPackStats() {
        const assetStats = this.assetManager.getLoadingStats();
        const soundStats = this.soundManager.getSoundLoadingStats();
        
        return {
            assets: assetStats,
            sounds: soundStats,
            totalContentPacks: assetStats.contentPacks,
            memoryUsage: {
                loadedAssets: assetStats.totalAssets,
                loadedSounds: soundStats.totalSounds,
                registeredLazyAssets: assetStats.registeredLazyAssets,
                registeredLazySounds: soundStats.registeredLazySounds
            }
        };
    }

    /**
     * Trigger content pack loading events for jQuery integration
     * @param {string} packName - Pack name
     * @param {string} eventType - Event type ('loaded', 'unloaded', 'error')
     * @param {Error} error - Error object for error events
     * @private
     */
    _triggerPackLoadEvent(packName, eventType, error = null) {
        const eventData = {
            packName,
            type: eventType,
            timestamp: Date.now()
        };
        
        if (error) {
            eventData.error = error;
        }
        
        // Trigger jQuery custom event if available
        if (typeof $ !== 'undefined') {
            $(document).trigger('contentpack:' + eventType, eventData);
        }
        
        // Also trigger native DOM event
        const customEvent = new CustomEvent('contentpack', {
            detail: eventData
        });
        document.dispatchEvent(customEvent);
    }

    /**
     * Clean up and restore original container styles
     */
    destroy() {
        this.stop();
        
        // Restore original container styles if they were stored
        if (this._originalContainerStyles && this.config.autoCenter) {
            const container = this.config.container;
            container.style.display = this._originalContainerStyles.display;
            container.style.justifyContent = this._originalContainerStyles.justifyContent;
            container.style.alignItems = this._originalContainerStyles.alignItems;
            container.style.textAlign = this._originalContainerStyles.textAlign;
        }
        
        // Remove canvas from DOM
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        
        // Clean up systems
        if (this.particleSystem) {
            this.particleSystem.clear();
        }
        if (this.tweenManager) {
            this.tweenManager.clear();
        }
        if (this.effectsManager) {
            this.effectsManager.clear();
        }
    }

    /**
     * Main game loop
     * @private
     */
    _gameLoop() {
        if (!this.isRunning) return;
        
        const currentTime = performance.now();
        this.deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Apply time effects
        this.deltaTime = this.timeManager.applyTimeScale(this.deltaTime);
        
        // Update FPS counter
        this.frameCount++;
        if (this.frameCount % 60 === 0) {
            this.fps = Math.round(1 / this.deltaTime);
        }
        
        this._updateStates();
        this._update();
        this._render();
        
        requestAnimationFrame(() => this._gameLoop());
    }

    /**
     * Update all systems
     * @private
     */
    _update() {
        this.input.update(this.deltaTime);
        this.tweenManager.update(this.deltaTime);
        this.particleSystem.update(this.deltaTime);
        this.effectsManager.update(this.deltaTime);
        this.timeManager.update(this.deltaTime);
        this.uiManager.update(this.deltaTime);
        
        if (this.currentState) {
            this.states.get(this.currentState).update(this.deltaTime);
        }
    }

    /**
     * Render all systems
     * @private
     */
    _render() {
        this.renderer.clear();
        this.renderer.beginFrame();
        
        // Apply screen effects (shake, zoom punch)
        this.effectsManager.applyEffects(this.renderer);
        
        if (this.currentState) {
            this.states.get(this.currentState).render(this.renderer);
        }
        
        this.particleSystem.render(this.renderer);
        
        // Render UI on top of everything else
        this.uiManager.render(this.renderer);
        
        // Apply post-render effects (screen flash)
        this.effectsManager.applyPostEffects(this.renderer);
        
        this.renderer.endFrame();
    }
}

/**
 * Base class for game states (menu, game, shop, etc.)
 * Extend this class to create custom game states
 * 
 * @example
 * class MenuState extends GameState {
 *   enter() {
 *     console.log('Entered menu state');
 *   }
 *   
 *   update(deltaTime) {
 *     // Update menu logic
 *   }
 *   
 *   render(renderer) {
 *     renderer.drawText('Main Menu', 400, 300);
 *   }
 * }
 */
class GameState {
    constructor() {
        this.game = null;
    }

    /**
     * Called when entering this state
     */
    enter() {}

    /**
     * Called when exiting this state
     */
    exit() {}

    /**
     * Update state logic
     * @param {number} deltaTime - Time since last frame in seconds
     */
    update(deltaTime) {}

    /**
     * Render state visuals
     * @param {Renderer} renderer - Renderer instance
     */
    render(renderer) {}
}

/**
 * Advanced rendering system with optimization for pixel-perfect and vector graphics
 * Supports pre/post processing effects and various drawing operations
 */
class Renderer {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;
        this.canvas = game.canvas;
        
        // Render layers
        this.layers = [];
        this.currentLayer = 0;
        
        // Post-processing
        this.effects = [];
        this.preEffects = [];
        
        // Camera system
        this.camera = {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0
        };
        
        // Render stats
        this.drawCalls = 0;
    }

    /**
     * Clear the canvas
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCalls = 0;
    }

    /**
     * Begin frame rendering
     */
    beginFrame() {
        this.ctx.save();
        this._applyCamera();
        this._applyPreEffects();
    }

    /**
     * End frame rendering
     */
    endFrame() {
        this._applyPostEffects();
        this.ctx.restore();
    }

    /**
     * Apply camera transformations
     * @private
     */
    _applyCamera() {
        // Only apply camera transformations if camera is not at default position/values
        if (this.camera.x !== 0 || this.camera.y !== 0 || this.camera.scale !== 1 || this.camera.rotation !== 0) {
            this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
            this.ctx.scale(this.camera.scale, this.camera.scale);
            this.ctx.rotate(this.camera.rotation);
            this.ctx.translate(-this.camera.x, -this.camera.y);
        }
    }

    /**
     * Apply pre-processing effects
     * @private
     */
    _applyPreEffects() {
        this.preEffects.forEach(effect => effect.apply(this.ctx));
    }

    /**
     * Apply post-processing effects
     * @private
     */
    _applyPostEffects() {
        this.effects.forEach(effect => effect.apply(this.ctx));
    }

    /**
     * Draw an image with advanced options
     * @param {HTMLImageElement|HTMLCanvasElement} image - Image to draw
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {Object} [options={}] - Drawing options
     * @param {number} [options.width] - Override width
     * @param {number} [options.height] - Override height
     * @param {number} [options.rotation=0] - Rotation in radians
     * @param {number} [options.scaleX=1] - X scale factor
     * @param {number} [options.scaleY=1] - Y scale factor
     * @param {number} [options.alpha=1] - Alpha opacity
     * @param {string} [options.blendMode='source-over'] - Blend mode
     */
    drawImage(image, x, y, options = {}) {
        const {
            width = image.width,
            height = image.height,
            rotation = 0,
            scaleX = 1,
            scaleY = 1,
            alpha = 1,
            blendMode = 'source-over'
        } = options;

        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.globalCompositeOperation = blendMode;
        
        this.ctx.translate(x + width / 2, y + height / 2);
        this.ctx.rotate(rotation);
        this.ctx.scale(scaleX, scaleY);
        
        this.ctx.drawImage(image, -width / 2, -height / 2, width, height);
        this.ctx.restore();
        
        this.drawCalls++;
    }

    /**
     * Draw a sprite from a spritesheet
     * @param {Spritesheet} spritesheet - Spritesheet instance
     * @param {string} spriteName - Name of the sprite
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {Object} [options={}] - Drawing options (same as drawImage)
     */
    drawSprite(spritesheet, spriteName, x, y, options = {}) {
        const sprite = spritesheet.getSprite(spriteName);
        if (!sprite) return;
        
        // Generate cache key based on sprite and transform options
        const transform = {
            scale: options.scaleX || options.scaleY || 1,
            rotation: options.rotation || 0,
            flipX: options.flipX || false,
            flipY: options.flipY || false,
            tint: options.tint || null,
            alpha: options.alpha || 1,
            filter: options.filter || null
        };
        
        const hasTransforms = transform.scale !== 1 || transform.rotation !== 0 || 
                             transform.flipX || transform.flipY || transform.tint || 
                             transform.alpha !== 1 || transform.filter;
        
        let renderSource;
        
        if (hasTransforms && this.game.renderCache) {
            // Use transform cache for complex transformations
            const cacheKey = this.game.renderCache.generateSpriteKey(
                `${spritesheet.image.src || 'sheet'}_${spriteName}`, 
                0, 
                transform
            );
            
            // First get the base sprite frame
            const frameKey = `sprite_${spritesheet.image.src || 'sheet'}_${spriteName}`;
            let baseFrame = this.game.renderCache.spriteFrameCache.get(frameKey);
            
            if (!baseFrame) {
                // Cache the base sprite frame
                const canvas = document.createElement('canvas');
                canvas.width = sprite.width;
                canvas.height = sprite.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(
                    spritesheet.image,
                    sprite.x, sprite.y, sprite.width, sprite.height,
                    0, 0, sprite.width, sprite.height
                );
                baseFrame = canvas;
                this.game.renderCache.spriteFrameCache.set(frameKey, baseFrame);
            }
            
            // Get transformed version
            renderSource = this.game.renderCache.cacheTransformedSprite(cacheKey, baseFrame, transform);
            
            // Draw cached transformed sprite (no additional transforms needed)
            this.ctx.save();
            this.ctx.globalAlpha = options.alpha || 1;
            this.ctx.globalCompositeOperation = options.blendMode || 'source-over';
            
            const width = options.width || renderSource.width;
            const height = options.height || renderSource.height;
            
            this.ctx.drawImage(renderSource, x - width/2, y - height/2, width, height);
            this.ctx.restore();
            
        } else {
            // Simple draw without transforms or cache disabled
            this.ctx.save();
            this.ctx.globalAlpha = options.alpha || 1;
            this.ctx.globalCompositeOperation = options.blendMode || 'source-over';
            
            const width = options.width || sprite.width;
            const height = options.height || sprite.height;
            
            this.ctx.translate(x + width / 2, y + height / 2);
            this.ctx.rotate(options.rotation || 0);
            this.ctx.scale(options.scaleX || 1, options.scaleY || 1);
            
            this.ctx.drawImage(
                spritesheet.image,
                sprite.x, sprite.y, sprite.width, sprite.height,
                -width / 2, -height / 2, width, height
            );
            
            this.ctx.restore();
        }
        this.drawCalls++;
    }

    /**
     * Draw an animation player (automatically uses cache when possible)
     * @param {AnimationPlayer} player - Animation player
     * @param {number} x - X position
     * @param {number} y - Y position  
     * @param {Object} [options={}] - Drawing options
     */
    drawAnimationPlayer(player, x, y, options = {}) {
        if (!player.isPlaying && !player.isPaused) return;
        
        // Try to get cached frame first
        const cachedFrame = player.getCachedFrame(options);
        
        if (cachedFrame) {
            // Draw cached frame directly
            this.ctx.save();
            this.ctx.globalAlpha = options.alpha || 1;
            this.ctx.globalCompositeOperation = options.blendMode || 'source-over';
            
            const width = options.width || cachedFrame.width;
            const height = options.height || cachedFrame.height;
            
            this.ctx.drawImage(cachedFrame, x - width/2, y - height/2, width, height);
            this.ctx.restore();
        } else {
            // Fallback to regular sprite drawing
            const frameIndex = player.getCurrentFrame();
            if (frameIndex !== null) {
                this.drawSprite(player.spritesheet, frameIndex, x, y, options);
            }
        }
        
        this.drawCalls++;
    }

    /**
     * Draw text with advanced styling
     * @param {string} text - Text to draw
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {Object} [options={}] - Text options
     * @param {string} [options.font='16px Arial'] - Font specification
     * @param {string} [options.color='black'] - Text color
     * @param {string} [options.align='left'] - Text alignment
     * @param {string} [options.baseline='top'] - Text baseline
     * @param {number} [options.alpha=1] - Alpha opacity
     * @param {boolean} [options.stroke=false] - Draw stroke
     * @param {string} [options.strokeColor='white'] - Stroke color
     * @param {number} [options.strokeWidth=1] - Stroke width
     */
    drawText(text, x, y, options = {}) {
        const {
            font = '16px Arial',
            color = 'black',
            align = 'left',
            baseline = 'top',
            alpha = 1,
            stroke = false,
            strokeColor = 'white',
            strokeWidth = 1
        } = options;

        this.ctx.save();
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.textBaseline = baseline;
        this.ctx.globalAlpha = alpha;
        
        if (stroke) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = strokeWidth;
            this.ctx.strokeText(text, x, y);
        }
        
        this.ctx.fillText(text, x, y);
        this.ctx.restore();
        
        this.drawCalls++;
    }

    /**
     * Draw a rectangle
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {number} width - Width
     * @param {number} height - Height
     * @param {Object} [options={}] - Drawing options
     * @param {string} [options.color='black'] - Fill color
     * @param {boolean} [options.stroke=false] - Draw stroke
     * @param {string} [options.strokeColor='black'] - Stroke color
     * @param {number} [options.strokeWidth=1] - Stroke width
     * @param {number} [options.alpha=1] - Alpha opacity
     */
    drawRect(x, y, width, height, options = {}) {
        const {
            color = 'black',
            stroke = false,
            strokeColor = 'black',
            strokeWidth = 1,
            alpha = 1
        } = options;

        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = color;
        
        if (stroke) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = strokeWidth;
            this.ctx.strokeRect(x, y, width, height);
        }
        
        this.ctx.fillRect(x, y, width, height);
        this.ctx.restore();
        
        this.drawCalls++;
    }

    /**
     * Set camera position
     * @param {number} x - X position
     * @param {number} y - Y position
     */
    setCameraPosition(x, y) {
        this.camera.x = x;
        this.camera.y = y;
    }

    /**
     * Set camera scale
     * @param {number} scale - Scale factor
     */
    setCameraScale(scale) {
        this.camera.scale = scale;
    }

    /**
     * Set camera rotation
     * @param {number} rotation - Rotation in radians
     */
    setCameraRotation(rotation) {
        this.camera.rotation = rotation;
    }
}

/**
 * Asset management system for loading and caching images, spritesheets, and other resources
 * Provides preloading capabilities and asset organization
 */
class AssetManager {
    constructor(game) {
        this.game = game;
        this.assets = new Map();
        this.spritesheets = new Map();
        this.loadingPromises = new Map();
        
        // Lazy loading and content patch management
        this.contentPacks = new Map();
        this.lazyAssets = new Map(); // Assets registered but not loaded
        this.preloadQueue = [];
        this.loadingPriorities = new Map();
        this.maxConcurrentLoads = 3;
        this.currentLoads = 0;
    }

    /**
     * Load an image asset
     * @param {string} name - Asset name/key
     * @param {string} url - Image URL
     * @returns {Promise<HTMLImageElement>} Promise resolving to loaded image
     */
    async loadImage(name, url) {
        if (this.assets.has(name)) {
            return this.assets.get(name);
        }

        if (this.loadingPromises.has(name)) {
            return this.loadingPromises.get(name);
        }

        const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.assets.set(name, img);
                this.loadingPromises.delete(name);
                resolve(img);
            };
            img.onerror = reject;
            img.src = url;
        });

        this.loadingPromises.set(name, promise);
        return promise;
    }

    /**
     * Load a spritesheet
     * @param {string} name - Spritesheet name
     * @param {string} imageUrl - Spritesheet image URL
     * @param {Object} config - Spritesheet configuration
     * @returns {Promise<Spritesheet>} Promise resolving to spritesheet
     */
    async loadSpritesheet(name, imageUrl, config) {
        const image = await this.loadImage(`${name}_image`, imageUrl);
        const spritesheet = new Spritesheet(image, config, this.game);
        this.spritesheets.set(name, spritesheet);
        return spritesheet;
    }

    /**
     * Get a loaded asset
     * @param {string} name - Asset name
     * @returns {HTMLImageElement|null} Loaded asset or null
     */
    getAsset(name) {
        return this.assets.get(name) || null;
    }

    /**
     * Get a loaded spritesheet
     * @param {string} name - Spritesheet name
     * @returns {Spritesheet|null} Loaded spritesheet or null
     */
    getSpritesheet(name) {
        return this.spritesheets.get(name) || null;
    }

    /**
     * Load multiple assets in batch
     * @param {Array<{name: string, url: string, type: 'image'|'spritesheet', config?: Object}>} assets - Assets to load
     * @returns {Promise<void>} Promise resolving when all assets are loaded
     */
    async loadBatch(assets) {
        const promises = assets.map(asset => {
            switch (asset.type) {
                case 'image':
                    return this.loadImage(asset.name, asset.url);
                case 'spritesheet':
                    return this.loadSpritesheet(asset.name, asset.url, asset.config);
                default:
                    throw new Error(`Unknown asset type: ${asset.type}`);
            }
        });

        await Promise.all(promises);
    }

    /**
     * Register a content pack with lazy-loaded assets
     * @param {string} packName - Content pack identifier
     * @param {Object} packConfig - Pack configuration with assets
     * @example
     * game.assetManager.registerContentPack('level2', {
     *   assets: [
     *     { name: 'boss', url: 'level2/boss.png', type: 'image', priority: 'high' },
     *     { name: 'level2_bg', url: 'level2/background.png', type: 'image', priority: 'low' }
     *   ],
     *   sounds: [
     *     { name: 'boss_music', url: 'level2/boss.mp3', priority: 'medium' }
     *   ]
     * });
     */
    registerContentPack(packName, packConfig) {
        this.contentPacks.set(packName, {
            ...packConfig,
            loaded: false,
            loading: false
        });

        // Register lazy assets without loading
        if (packConfig.assets) {
            packConfig.assets.forEach(asset => {
                this.lazyAssets.set(asset.name, {
                    ...asset,
                    pack: packName,
                    registered: true,
                    loaded: false
                });
                
                if (asset.priority) {
                    this.loadingPriorities.set(asset.name, asset.priority);
                }
            });
        }

        console.log(`Content pack '${packName}' registered with ${packConfig.assets?.length || 0} assets`);
    }

    /**
     * Load a content pack on demand
     * @param {string} packName - Content pack to load
     * @param {Object} options - Loading options
     * @returns {Promise<void>} Promise resolving when pack is loaded
     */
    async loadContentPack(packName, options = {}) {
        const pack = this.contentPacks.get(packName);
        if (!pack) {
            throw new Error(`Content pack '${packName}' not found. Register it first.`);
        }

        if (pack.loaded) {
            console.log(`Content pack '${packName}' already loaded`);
            return;
        }

        if (pack.loading) {
            // Wait for existing load to complete
            return new Promise((resolve) => {
                const checkLoaded = () => {
                    if (pack.loaded) {
                        resolve();
                    } else {
                        setTimeout(checkLoaded, 50);
                    }
                };
                checkLoaded();
            });
        }

        pack.loading = true;
        console.log(`Loading content pack '${packName}'...`);

        try {
            // Load assets with priority ordering
            const assets = pack.assets || [];
            const priorityOrder = { high: 0, medium: 1, low: 2 };
            
            const sortedAssets = assets.sort((a, b) => {
                const priorityA = priorityOrder[a.priority] ?? 1;
                const priorityB = priorityOrder[b.priority] ?? 1;
                return priorityA - priorityB;
            });

            // Load assets with concurrency control
            await this._loadAssetsWithConcurrency(sortedAssets, options);

            // Load sounds if SoundManager integration exists
            if (pack.sounds && this.game.soundManager) {
                await this.game.soundManager.loadContentPackSounds(packName, pack.sounds);
            }

            pack.loaded = true;
            pack.loading = false;
            console.log(`Content pack '${packName}' loaded successfully`);

        } catch (error) {
            pack.loading = false;
            throw new Error(`Failed to load content pack '${packName}': ${error.message}`);
        }
    }

    /**
     * Load assets with concurrency control
     * @param {Array} assets - Assets to load
     * @param {Object} options - Loading options
     * @private
     */
    async _loadAssetsWithConcurrency(assets, options = {}) {
        const concurrent = options.maxConcurrent || this.maxConcurrentLoads;
        const chunks = [];
        
        for (let i = 0; i < assets.length; i += concurrent) {
            chunks.push(assets.slice(i, i + concurrent));
        }

        for (const chunk of chunks) {
            const promises = chunk.map(async (asset) => {
                try {
                    switch (asset.type) {
                        case 'image':
                            return await this.loadImage(asset.name, asset.url);
                        case 'spritesheet':
                            return await this.loadSpritesheet(asset.name, asset.url, asset.config);
                        default:
                            console.warn(`Unknown asset type: ${asset.type}`);
                    }
                } catch (error) {
                    console.error(`Failed to load asset '${asset.name}':`, error);
                    throw error;
                }
            });

            await Promise.all(promises);
        }
    }

    /**
     * Lazy load an asset when first accessed
     * @param {string} name - Asset name
     * @returns {Promise<any>} Promise resolving to the asset
     */
    async lazyLoad(name) {
        // If already loaded, return immediately
        if (this.assets.has(name) || this.spritesheets.has(name)) {
            return this.getAsset(name) || this.getSpritesheet(name);
        }

        // Check if it's a registered lazy asset
        const lazyAsset = this.lazyAssets.get(name);
        if (!lazyAsset) {
            throw new Error(`Asset '${name}' not found. Register it in a content pack first.`);
        }

        console.log(`Lazy loading asset '${name}'...`);

        // Load the asset
        switch (lazyAsset.type) {
            case 'image':
                return await this.loadImage(name, lazyAsset.url);
            case 'spritesheet':
                return await this.loadSpritesheet(name, lazyAsset.url, lazyAsset.config);
            default:
                throw new Error(`Unknown lazy asset type: ${lazyAsset.type}`);
        }
    }

    /**
     * Preload assets based on priority hints
     * @param {Array} assetNames - Asset names to preload
     * @param {string} priority - Priority level ('high', 'medium', 'low')
     */
    addToPreloadQueue(assetNames, priority = 'medium') {
        assetNames.forEach(name => {
            if (this.lazyAssets.has(name) && !this.assets.has(name)) {
                this.preloadQueue.push({ name, priority });
                this.loadingPriorities.set(name, priority);
            }
        });

        // Sort preload queue by priority
        this.preloadQueue.sort((a, b) => {
            const priorities = { high: 0, medium: 1, low: 2 };
            return priorities[a.priority] - priorities[b.priority];
        });
    }

    /**
     * Process the preload queue during idle time
     * @param {number} maxItems - Maximum items to preload in this batch
     */
    async processPreloadQueue(maxItems = 2) {
        if (this.currentLoads >= this.maxConcurrentLoads) {
            return; // Already at capacity
        }

        const itemsToLoad = this.preloadQueue.splice(0, maxItems);
        
        const promises = itemsToLoad.map(async (item) => {
            this.currentLoads++;
            try {
                await this.lazyLoad(item.name);
                console.log(`Preloaded asset '${item.name}' (${item.priority} priority)`);
            } catch (error) {
                console.error(`Failed to preload '${item.name}':`, error);
            } finally {
                this.currentLoads--;
            }
        });

        await Promise.allSettled(promises);
    }

    /**
     * Unload a content pack to free memory
     * @param {string} packName - Content pack to unload
     */
    unloadContentPack(packName) {
        const pack = this.contentPacks.get(packName);
        if (!pack || !pack.loaded) {
            return;
        }

        // Unload pack assets
        if (pack.assets) {
            pack.assets.forEach(asset => {
                this.assets.delete(asset.name);
                this.spritesheets.delete(asset.name);
                console.log(`Unloaded asset '${asset.name}' from pack '${packName}'`);
            });
        }

        pack.loaded = false;
        console.log(`Content pack '${packName}' unloaded`);
    }

    /**
     * Get loading statistics
     * @returns {Object} Loading stats
     */
    getLoadingStats() {
        return {
            totalAssets: this.assets.size + this.spritesheets.size,
            registeredLazyAssets: this.lazyAssets.size,
            contentPacks: this.contentPacks.size,
            preloadQueueSize: this.preloadQueue.length,
            currentLoads: this.currentLoads,
            loadedPacks: Array.from(this.contentPacks.entries())
                .filter(([, pack]) => pack.loaded)
                .map(([name]) => name)
        };
    }
}

/**
 * SoundManager - Comprehensive audio system built on Howler.js
 * Provides game-optimized audio management with 3D positioning, sound pools, and effects
 * 
 * Features:
 * - Automatic sound loading and caching
 * - 3D spatial audio positioning
 * - Sound pooling for performance
 * - Volume mixing (master, music, sfx)
 * - Audio sprites support
 * - Cross-browser compatibility via Howler.js
 * 
 * @example
 * // Load and play a sound
 * await game.soundManager.loadSound('laser', 'sounds/laser.mp3');
 * game.soundManager.playSound('laser');
 * 
 * // 3D positioned sound
 * game.soundManager.playSound('explosion', { 
 *   x: player.x, 
 *   y: player.y, 
 *   volume: 0.8 
 * });
 * 
 * // Background music with looping
 * game.soundManager.playMusic('bgmusic', 'music/theme.mp3', { loop: true });
 */
class SoundManager {
    constructor(game) {
        this.game = game;
        this.sounds = new Map();
        this.music = new Map();
        this.loadingPromises = new Map();
        
        // Volume mixing
        this.volumes = {
            master: 1.0,
            music: 0.7,
            sfx: 0.8,
            voice: 1.0
        };
        
        // 3D audio settings
        this.listenerPosition = { x: 0, y: 0, z: 0 };
        this.maxDistance = 1000;
        
        // Lazy loading and content pack management for sounds
        this.contentPacks = new Map();
        this.lazySounds = new Map(); // Sounds registered but not loaded
        this.preloadQueue = [];
        this.loadingPriorities = new Map();
        this.maxConcurrentSoundLoads = 2;
        this.currentSoundLoads = 0;
        
        // Wait for Howler.js to be available
        this._waitForHowler();
    }

    /**
     * Wait for Howler.js to load before enabling audio functionality
     * @private
     */
    _waitForHowler() {
        const checkHowler = () => {
            if (typeof Howl !== 'undefined') {
                this._setupGlobalVolume();
            } else {
                setTimeout(checkHowler, 100);
            }
        };
        checkHowler();
    }

    /**
     * Setup global Howler volume controls
     * @private
     */
    _setupGlobalVolume() {
        if (typeof Howler !== 'undefined') {
            Howler.volume(this.volumes.master);
        }
    }

    /**
     * Load a sound file and cache it
     * @param {string} name - Sound identifier
     * @param {string|Array} src - Sound file path(s)
     * @param {Object} options - Howler.js options
     * @returns {Promise<Howl>} Promise resolving to loaded sound
     */
    async loadSound(name, src, options = {}) {
        if (this.sounds.has(name)) {
            return this.sounds.get(name);
        }

        if (this.loadingPromises.has(name)) {
            return this.loadingPromises.get(name);
        }

        const promise = new Promise((resolve, reject) => {
            if (typeof Howl === 'undefined') {
                reject(new Error('Howler.js not loaded'));
                return;
            }

            const howlOptions = {
                src: Array.isArray(src) ? src : [src],
                volume: options.volume || this.volumes.sfx,
                loop: options.loop || false,
                autoplay: false,
                preload: true,
                ...options
            };

            const sound = new Howl({
                ...howlOptions,
                onload: () => {
                    this.sounds.set(name, sound);
                    this.loadingPromises.delete(name);
                    resolve(sound);
                },
                onloaderror: (id, error) => {
                    this.loadingPromises.delete(name);
                    reject(new Error(`Failed to load sound '${name}': ${error}`));
                }
            });
        });

        this.loadingPromises.set(name, promise);
        return promise;
    }

    /**
     * Play a sound with optional 3D positioning and effects
     * @param {string} name - Sound identifier
     * @param {Object} options - Playback options
     * @returns {number|null} Sound instance ID or null if failed
     */
    playSound(name, options = {}) {
        const sound = this.sounds.get(name);
        if (!sound) {
            console.warn(`Sound '${name}' not loaded`);
            return null;
        }

        const id = sound.play();
        
        // Apply options
        if (options.volume !== undefined) {
            sound.volume(options.volume * this.volumes.sfx, id);
        }
        
        if (options.rate !== undefined) {
            sound.rate(options.rate, id);
        }

        // 3D positioning
        if (options.x !== undefined || options.y !== undefined) {
            this._apply3DPosition(sound, id, options);
        }

        return id;
    }

    /**
     * Play background music with looping
     * @param {string} name - Music identifier
     * @param {string|Array} src - Music file path(s) (optional if already loaded)
     * @param {Object} options - Music options
     * @returns {Promise<number>} Promise resolving to music instance ID
     */
    async playMusic(name, src = null, options = {}) {
        let music = this.music.get(name);
        
        // Load music if not already loaded
        if (!music && src) {
            const musicOptions = {
                volume: options.volume || this.volumes.music,
                loop: options.loop !== false, // Default to looping
                autoplay: false,
                preload: true,
                ...options
            };

            music = await new Promise((resolve, reject) => {
                const howl = new Howl({
                    src: Array.isArray(src) ? src : [src],
                    ...musicOptions,
                    onload: () => resolve(howl),
                    onloaderror: reject
                });
            });

            this.music.set(name, music);
        }

        if (!music) {
            throw new Error(`Music '${name}' not found and no src provided`);
        }

        const id = music.play();
        return id;
    }

    /**
     * Stop a sound or music
     * @param {string} name - Sound/music identifier
     * @param {number} id - Specific instance ID (optional)
     */
    stop(name, id = null) {
        const sound = this.sounds.get(name) || this.music.get(name);
        if (sound) {
            sound.stop(id);
        }
    }

    /**
     * Pause a sound or music
     * @param {string} name - Sound/music identifier
     * @param {number} id - Specific instance ID (optional)
     */
    pause(name, id = null) {
        const sound = this.sounds.get(name) || this.music.get(name);
        if (sound) {
            sound.pause(id);
        }
    }

    /**
     * Set volume for different audio categories
     * @param {string} category - 'master', 'music', 'sfx', 'voice'
     * @param {number} volume - Volume level (0.0 to 1.0)
     */
    setVolume(category, volume) {
        if (this.volumes.hasOwnProperty(category)) {
            this.volumes[category] = volume;
            
            if (category === 'master' && typeof Howler !== 'undefined') {
                Howler.volume(volume);
            } else {
                // Update existing sounds
                this._updateCategoryVolume(category);
            }
        }
    }

    /**
     * Update volume for all sounds in a category
     * @param {string} category - Volume category
     * @private
     */
    _updateCategoryVolume(category) {
        if (category === 'music') {
            this.music.forEach(music => {
                music.volume(this.volumes.music);
            });
        } else if (category === 'sfx') {
            this.sounds.forEach(sound => {
                sound.volume(this.volumes.sfx);
            });
        }
    }

    /**
     * Apply 3D positioning to a sound
     * @param {Howl} sound - Howler sound instance
     * @param {number} id - Sound instance ID
     * @param {Object} position - Position options
     * @private
     */
    _apply3DPosition(sound, id, position) {
        const x = position.x || 0;
        const y = position.y || 0;
        const z = position.z || 0;

        // Calculate distance-based volume attenuation
        const distance = Math.sqrt(
            Math.pow(x - this.listenerPosition.x, 2) +
            Math.pow(y - this.listenerPosition.y, 2) +
            Math.pow(z - this.listenerPosition.z, 2)
        );

        const volumeAttenuation = Math.max(0, 1 - (distance / this.maxDistance));
        const finalVolume = (position.volume || this.volumes.sfx) * volumeAttenuation;
        
        sound.volume(finalVolume, id);

        // Simple stereo panning based on X position
        const panRange = this.maxDistance * 0.5;
        const pan = Math.max(-1, Math.min(1, (x - this.listenerPosition.x) / panRange));
        
        if (sound.stereo) {
            sound.stereo(pan, id);
        }
    }

    /**
     * Set the 3D listener position (usually the player/camera position)
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} z - Z coordinate (optional)
     */
    setListenerPosition(x, y, z = 0) {
        this.listenerPosition = { x, y, z };
    }

    /**
     * Fade a sound in or out
     * @param {string} name - Sound identifier
     * @param {number} from - Starting volume
     * @param {number} to - Target volume
     * @param {number} duration - Fade duration in milliseconds
     * @param {number} id - Specific instance ID (optional)
     */
    fade(name, from, to, duration, id = null) {
        const sound = this.sounds.get(name) || this.music.get(name);
        if (sound) {
            sound.fade(from, to, duration, id);
        }
    }

    /**
     * Load multiple sounds in batch
     * @param {Array} soundList - Array of {name, src, options} objects
     * @returns {Promise<void>} Promise resolving when all sounds are loaded
     */
    async loadBatch(soundList) {
        const promises = soundList.map(({ name, src, options }) => 
            this.loadSound(name, src, options)
        );
        await Promise.all(promises);
    }

    /**
     * Get the current state of a sound
     * @param {string} name - Sound identifier
     * @returns {string} 'unloaded', 'loading', 'loaded'
     */
    getSoundState(name) {
        if (this.sounds.has(name) || this.music.has(name)) {
            return 'loaded';
        }
        if (this.loadingPromises.has(name)) {
            return 'loading';
        }
        return 'unloaded';
    }

    /**
     * Load content pack sounds (called by AssetManager)
     * @param {string} packName - Content pack name
     * @param {Array} sounds - Sound configuration array
     */
    async loadContentPackSounds(packName, sounds) {
        if (!sounds || sounds.length === 0) return;

        console.log(`Loading ${sounds.length} sounds for content pack '${packName}'...`);

        // Sort sounds by priority
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const sortedSounds = sounds.sort((a, b) => {
            const priorityA = priorityOrder[a.priority] ?? 1;
            const priorityB = priorityOrder[b.priority] ?? 1;
            return priorityA - priorityB;
        });

        // Load sounds with concurrency control
        await this._loadSoundsWithConcurrency(sortedSounds);
    }

    /**
     * Load sounds with concurrency control
     * @param {Array} sounds - Sounds to load
     * @private
     */
    async _loadSoundsWithConcurrency(sounds) {
        const concurrent = this.maxConcurrentSoundLoads;
        const chunks = [];
        
        for (let i = 0; i < sounds.length; i += concurrent) {
            chunks.push(sounds.slice(i, i + concurrent));
        }

        for (const chunk of chunks) {
            const promises = chunk.map(async (sound) => {
                try {
                    await this.loadSound(sound.name, sound.url, sound.options || {});
                } catch (error) {
                    console.error(`Failed to load sound '${sound.name}':`, error);
                    throw error;
                }
            });

            await Promise.all(promises);
        }
    }

    /**
     * Register lazy-loaded sounds for a content pack
     * @param {string} packName - Content pack name
     * @param {Array} sounds - Sound configurations
     */
    registerLazySounds(packName, sounds) {
        if (!sounds) return;

        sounds.forEach(sound => {
            this.lazySounds.set(sound.name, {
                ...sound,
                pack: packName,
                registered: true,
                loaded: false
            });

            if (sound.priority) {
                this.loadingPriorities.set(sound.name, sound.priority);
            }
        });

        console.log(`Registered ${sounds.length} lazy sounds for pack '${packName}'`);
    }

    /**
     * Lazy load a sound when first accessed
     * @param {string} name - Sound name
     * @returns {Promise<Howl>} Promise resolving to the sound
     */
    async lazyLoadSound(name) {
        // If already loaded, return immediately
        if (this.sounds.has(name) || this.music.has(name)) {
            return this.sounds.get(name) || this.music.get(name);
        }

        // Check if it's a registered lazy sound
        const lazySound = this.lazySounds.get(name);
        if (!lazySound) {
            throw new Error(`Sound '${name}' not found. Register it in a content pack first.`);
        }

        console.log(`Lazy loading sound '${name}'...`);

        // Load the sound
        return await this.loadSound(name, lazySound.url, lazySound.options || {});
    }

    /**
     * Enhanced playSound that supports lazy loading
     * @param {string} name - Sound identifier
     * @param {Object} options - Playback options
     * @returns {Promise<number|null>} Promise resolving to sound instance ID
     */
    async playLazySound(name, options = {}) {
        try {
            // Try to play immediately if loaded
            let sound = this.sounds.get(name);
            
            if (!sound) {
                // Attempt lazy loading
                sound = await this.lazyLoadSound(name);
            }

            if (!sound) {
                console.warn(`Sound '${name}' could not be loaded`);
                return null;
            }

            const id = sound.play();
            
            // Apply options
            if (options.volume !== undefined) {
                sound.volume(options.volume * this.volumes.sfx, id);
            }
            
            if (options.rate !== undefined) {
                sound.rate(options.rate, id);
            }

            // 3D positioning
            if (options.x !== undefined || options.y !== undefined) {
                this._apply3DPosition(sound, id, options);
            }

            return id;

        } catch (error) {
            console.error(`Failed to play lazy sound '${name}':`, error);
            return null;
        }
    }

    /**
     * Add sounds to preload queue
     * @param {Array} soundNames - Sound names to preload
     * @param {string} priority - Priority level
     */
    addSoundsToPreloadQueue(soundNames, priority = 'medium') {
        soundNames.forEach(name => {
            if (this.lazySounds.has(name) && !this.sounds.has(name)) {
                this.preloadQueue.push({ name, priority, type: 'sound' });
                this.loadingPriorities.set(name, priority);
            }
        });

        // Sort preload queue by priority
        this.preloadQueue.sort((a, b) => {
            const priorities = { high: 0, medium: 1, low: 2 };
            return priorities[a.priority] - priorities[b.priority];
        });
    }

    /**
     * Process sound preload queue during idle time
     * @param {number} maxItems - Maximum items to preload
     */
    async processSoundPreloadQueue(maxItems = 1) {
        if (this.currentSoundLoads >= this.maxConcurrentSoundLoads) {
            return; // Already at capacity
        }

        const soundItems = this.preloadQueue
            .filter(item => item.type === 'sound')
            .splice(0, maxItems);
        
        const promises = soundItems.map(async (item) => {
            this.currentSoundLoads++;
            try {
                await this.lazyLoadSound(item.name);
                console.log(`Preloaded sound '${item.name}' (${item.priority} priority)`);
            } catch (error) {
                console.error(`Failed to preload sound '${item.name}':`, error);
            } finally {
                this.currentSoundLoads--;
            }
        });

        await Promise.allSettled(promises);
    }

    /**
     * Unload sounds from a content pack
     * @param {string} packName - Content pack to unload sounds from
     */
    unloadContentPackSounds(packName) {
        const soundsToUnload = [];
        
        // Find sounds belonging to this pack
        this.lazySounds.forEach((sound, name) => {
            if (sound.pack === packName) {
                soundsToUnload.push(name);
            }
        });

        // Unload the sounds
        soundsToUnload.forEach(name => {
            const sound = this.sounds.get(name) || this.music.get(name);
            if (sound) {
                sound.unload();
                this.sounds.delete(name);
                this.music.delete(name);
                console.log(`Unloaded sound '${name}' from pack '${packName}'`);
            }
        });
    }

    /**
     * Get sound loading statistics
     * @returns {Object} Loading stats for sounds
     */
    getSoundLoadingStats() {
        return {
            totalSounds: this.sounds.size + this.music.size,
            registeredLazySounds: this.lazySounds.size,
            preloadQueueSize: this.preloadQueue.filter(item => item.type === 'sound').length,
            currentSoundLoads: this.currentSoundLoads,
            loadedSoundPacks: Array.from(this.contentPacks.keys())
        };
    }

    /**
     * Clean up and unload all sounds
     */
    destroy() {
        this.sounds.forEach(sound => sound.unload());
        this.music.forEach(music => music.unload());
        this.sounds.clear();
        this.music.clear();
        this.loadingPromises.clear();
    }
}

/**
 * Spritesheet class for managing sprite animations and tile sets
 * Supports both grid-based and JSON-defined spritesheets with advanced animation features
 * 
 * @example
 * // JSON-based spritesheet configuration
 * const config = {
 *   frameWidth: 64,
 *   frameHeight: 64,
 *   animations: {
 *     "idle": {
 *       frames: [0, 1, 2, 3],
 *       frameDuration: 0.2,
 *       loop: true
 *     },
 *     "walk": {
 *       frames: [4, 5, 6, 7, 8, 9],
 *       frameDuration: 0.1,
 *       loop: true
 *     },
 *     "jump": {
 *       frames: [10, 11, 12],
 *       frameDuration: 0.15,
 *       loop: false,
 *       onComplete: () => console.log('Jump finished!')
 *     }
 *   }
 * };
 */

/**
 * Advanced render cache system for optimized sprite and asset rendering
 * Provides multiple caching strategies for maximum performance
 */
class RenderCache {
    constructor(game) {
        this.game = game;
        
        // Cache storage
        this.spriteFrameCache = new Map(); // Pre-rendered sprite frames
        this.transformCache = new Map();   // Scaled/rotated sprites
        this.animationCache = new Map();   // Full animation sequences
        this.tileCache = new Map();        // Tile combinations
        this.effectCache = new Map();      // Particle textures and effects
        
        // Cache settings
        this.maxCacheSize = 100; // Max cached items per category
        this.maxAnimationFrames = 50; // Max frames to cache per animation
        this.compressionLevel = 0.8; // Quality for cached images
        
        // Statistics
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0,
            memoryUsage: 0
        };
    }

    /**
     * Cache a pre-rendered sprite frame
     * @param {string} key - Cache key
     * @param {HTMLImageElement} sprite - Source sprite
     * @param {number} frameIndex - Frame index
     * @param {Object} config - Sprite configuration
     * @returns {HTMLCanvasElement} Cached canvas
     */
    cacheSpriteFrame(key, sprite, frameIndex, config) {
        if (this.spriteFrameCache.has(key)) {
            this.stats.hits++;
            return this.spriteFrameCache.get(key);
        }

        // Create canvas for frame
        const canvas = document.createElement('canvas');
        canvas.width = config.frameWidth || sprite.width;
        canvas.height = config.frameHeight || sprite.height;
        const ctx = canvas.getContext('2d');

        // Calculate source position
        const cols = Math.floor(sprite.width / canvas.width);
        const col = frameIndex % cols;
        const row = Math.floor(frameIndex / cols);
        
        const srcX = col * canvas.width;
        const srcY = row * canvas.height;

        // Draw frame to canvas
        ctx.drawImage(
            sprite,
            srcX, srcY, canvas.width, canvas.height,
            0, 0, canvas.width, canvas.height
        );

        // Cache with LRU eviction
        this._cacheWithEviction(this.spriteFrameCache, key, canvas);
        this.stats.misses++;
        return canvas;
    }

    /**
     * Cache a transformed sprite (scaled, rotated, filtered)
     * @param {string} key - Cache key
     * @param {HTMLCanvasElement|HTMLImageElement} source - Source image
     * @param {Object} transform - Transform parameters
     * @returns {HTMLCanvasElement} Cached transformed canvas
     */
    cacheTransformedSprite(key, source, transform) {
        if (this.transformCache.has(key)) {
            this.stats.hits++;
            return this.transformCache.get(key);
        }

        const { scale = 1, rotation = 0, flipX = false, flipY = false, 
                tint = null, alpha = 1, filter = null } = transform;

        // Calculate canvas size accounting for rotation
        const srcWidth = source.width;
        const srcHeight = source.height;
        const scaledWidth = srcWidth * Math.abs(scale);
        const scaledHeight = srcHeight * Math.abs(scale);
        
        // Account for rotation bounds
        const cos = Math.abs(Math.cos(rotation));
        const sin = Math.abs(Math.sin(rotation));
        const rotatedWidth = scaledWidth * cos + scaledHeight * sin;
        const rotatedHeight = scaledWidth * sin + scaledHeight * cos;

        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(rotatedWidth);
        canvas.height = Math.ceil(rotatedHeight);
        const ctx = canvas.getContext('2d');

        ctx.save();
        
        // Center transform
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Apply transformations
        if (rotation !== 0) ctx.rotate(rotation);
        if (scale !== 1) ctx.scale(scale, scale);
        if (flipX) ctx.scale(-1, 1);
        if (flipY) ctx.scale(1, -1);
        if (alpha !== 1) ctx.globalAlpha = alpha;
        if (filter) ctx.filter = filter;
        
        // Apply tint if specified
        if (tint) {
            ctx.globalCompositeOperation = 'multiply';
            ctx.fillStyle = tint;
            ctx.fillRect(-srcWidth/2, -srcHeight/2, srcWidth, srcHeight);
            ctx.globalCompositeOperation = 'destination-atop';
        }
        
        // Draw sprite
        ctx.drawImage(source, -srcWidth / 2, -srcHeight / 2);
        
        ctx.restore();

        this._cacheWithEviction(this.transformCache, key, canvas);
        this.stats.misses++;
        return canvas;
    }

    /**
     * Cache an entire animation sequence
     * @param {string} key - Cache key
     * @param {Spritesheet} spritesheet - Source spritesheet
     * @param {string} animationName - Animation name
     * @param {Object} transform - Optional transform to apply
     * @returns {Array<HTMLCanvasElement>} Array of cached animation frames
     */
    cacheAnimationSequence(key, spritesheet, animationName, transform = {}) {
        if (this.animationCache.has(key)) {
            this.stats.hits++;
            return this.animationCache.get(key);
        }

        const animation = spritesheet.animations.get(animationName);
        if (!animation) return null;

        const cachedFrames = [];
        const maxFrames = Math.min(animation.frames.length, this.maxAnimationFrames);

        for (let i = 0; i < maxFrames; i++) {
            const frameIndex = animation.frames[i];
            const frameKey = `${key}_frame_${i}`;
            
            // Get base frame
            let frameCanvas = this.cacheSpriteFrame(frameKey, spritesheet.image, frameIndex, spritesheet.config);
            
            // Apply transforms if specified
            if (Object.keys(transform).length > 0) {
                const transformKey = `${frameKey}_transform`;
                frameCanvas = this.cacheTransformedSprite(transformKey, frameCanvas, transform);
            }
            
            cachedFrames.push(frameCanvas);
        }

        this._cacheWithEviction(this.animationCache, key, cachedFrames);
        this.stats.misses++;
        return cachedFrames;
    }

    /**
     * Cache tile combinations for tile-based games
     * @param {string} key - Cache key
     * @param {Array} tileData - Array of tile information
     * @param {number} tileWidth - Tile width
     * @param {number} tileHeight - Tile height
     * @returns {HTMLCanvasElement} Cached tile combination
     */
    cacheTileCombination(key, tileData, tileWidth, tileHeight) {
        if (this.tileCache.has(key)) {
            this.stats.hits++;
            return this.tileCache.get(key);
        }

        // Calculate canvas size based on tile arrangement
        const maxX = Math.max(...tileData.map(t => t.x)) + 1;
        const maxY = Math.max(...tileData.map(t => t.y)) + 1;
        
        const canvas = document.createElement('canvas');
        canvas.width = maxX * tileWidth;
        canvas.height = maxY * tileHeight;
        const ctx = canvas.getContext('2d');

        // Draw each tile
        tileData.forEach(tile => {
            const { x, y, sprite, frameIndex = 0, alpha = 1 } = tile;
            
            if (alpha !== 1) ctx.globalAlpha = alpha;
            
            if (sprite) {
                // Use cached sprite frame if available
                const frameKey = `tile_${sprite.src || 'sprite'}_${frameIndex}`;
                let frameCanvas = this.spriteFrameCache.get(frameKey);
                
                if (!frameCanvas) {
                    frameCanvas = this.cacheSpriteFrame(frameKey, sprite, frameIndex, {
                        frameWidth: tileWidth,
                        frameHeight: tileHeight
                    });
                }
                
                ctx.drawImage(frameCanvas, x * tileWidth, y * tileHeight);
            }
            
            if (alpha !== 1) ctx.globalAlpha = 1;
        });

        this._cacheWithEviction(this.tileCache, key, canvas);
        this.stats.misses++;
        return canvas;
    }

    /**
     * Cache effect textures and overlays
     * @param {string} key - Cache key
     * @param {Object} effectConfig - Effect configuration
     * @returns {HTMLCanvasElement} Cached effect texture
     */
    cacheEffect(key, effectConfig) {
        if (this.effectCache.has(key)) {
            this.stats.hits++;
            return this.effectCache.get(key);
        }

        const { 
            type = 'particle', 
            size = 32, 
            color = '#ffffff', 
            gradient = null,
            glow = false,
            pattern = 'circle'
        } = effectConfig;

        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 2;

        switch (pattern) {
            case 'circle':
                if (gradient) {
                    const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
                    gradient.forEach((stop, index) => {
                        grad.addColorStop(index / (gradient.length - 1), stop);
                    });
                    ctx.fillStyle = grad;
                } else {
                    ctx.fillStyle = color;
                }
                
                if (glow) {
                    ctx.shadowColor = color;
                    ctx.shadowBlur = radius / 2;
                }
                
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'square':
                ctx.fillStyle = color;
                if (glow) {
                    ctx.shadowColor = color;
                    ctx.shadowBlur = size / 4;
                }
                ctx.fillRect(size * 0.1, size * 0.1, size * 0.8, size * 0.8);
                break;

            case 'diamond':
                ctx.fillStyle = color;
                if (glow) {
                    ctx.shadowColor = color;
                    ctx.shadowBlur = size / 4;
                }
                ctx.beginPath();
                ctx.moveTo(centerX, size * 0.1);
                ctx.lineTo(size * 0.9, centerY);
                ctx.lineTo(centerX, size * 0.9);
                ctx.lineTo(size * 0.1, centerY);
                ctx.closePath();
                ctx.fill();
                break;

            case 'star':
                ctx.fillStyle = color;
                if (glow) {
                    ctx.shadowColor = color;
                    ctx.shadowBlur = size / 4;
                }
                this._drawStar(ctx, centerX, centerY, 5, radius * 0.8, radius * 0.4);
                break;
        }

        this._cacheWithEviction(this.effectCache, key, canvas);
        this.stats.misses++;
        return canvas;
    }

    /**
     * Generate cache key for sprites
     * @param {string} spriteId - Sprite identifier
     * @param {number} frameIndex - Frame index
     * @param {Object} transform - Transform parameters
     * @returns {string} Cache key
     */
    generateSpriteKey(spriteId, frameIndex, transform = {}) {
        const transformStr = Object.keys(transform).length > 0 
            ? JSON.stringify(transform) 
            : '';
        return `sprite_${spriteId}_${frameIndex}_${transformStr}`;
    }

    /**
     * Generate cache key for animations
     * @param {string} spriteId - Sprite identifier
     * @param {string} animationName - Animation name
     * @param {Object} transform - Transform parameters
     * @returns {string} Cache key
     */
    generateAnimationKey(spriteId, animationName, transform = {}) {
        const transformStr = Object.keys(transform).length > 0 
            ? JSON.stringify(transform) 
            : '';
        return `anim_${spriteId}_${animationName}_${transformStr}`;
    }

    /**
     * Clear specific cache or all caches
     * @param {string} [cacheType] - Cache type to clear ('sprites', 'transforms', 'animations', 'tiles', 'effects')
     */
    clearCache(cacheType = 'all') {
        switch (cacheType) {
            case 'sprites':
                this.spriteFrameCache.clear();
                break;
            case 'transforms':
                this.transformCache.clear();
                break;
            case 'animations':
                this.animationCache.clear();
                break;
            case 'tiles':
                this.tileCache.clear();
                break;
            case 'effects':
                this.effectCache.clear();
                break;
            case 'all':
            default:
                this.spriteFrameCache.clear();
                this.transformCache.clear();
                this.animationCache.clear();
                this.tileCache.clear();
                this.effectCache.clear();
                break;
        }
        this._updateMemoryUsage();
    }

    /**
     * Get cache statistics
     * @returns {Object} Cache statistics
     */
    getStats() {
        this._updateMemoryUsage();
        return {
            ...this.stats,
            caches: {
                sprites: this.spriteFrameCache.size,
                transforms: this.transformCache.size,
                animations: this.animationCache.size,
                tiles: this.tileCache.size,
                effects: this.effectCache.size
            },
            hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0
        };
    }

    /**
     * Optimize cache by removing least recently used items
     * @param {string} [cacheType] - Specific cache to optimize
     */
    optimizeCache(cacheType = 'all') {
        const caches = cacheType === 'all' 
            ? ['sprites', 'transforms', 'animations', 'tiles', 'effects']
            : [cacheType];

        caches.forEach(type => {
            const cache = this[`${type === 'sprites' ? 'spriteFrame' : type}Cache`];
            if (cache.size > this.maxCacheSize) {
                const keysToRemove = Array.from(cache.keys()).slice(0, cache.size - this.maxCacheSize);
                keysToRemove.forEach(key => cache.delete(key));
                this.stats.evictions += keysToRemove.length;
            }
        });
    }

    /**
     * Cache item with LRU eviction
     * @param {Map} cache - Target cache
     * @param {string} key - Cache key
     * @param {*} value - Value to cache
     * @private
     */
    _cacheWithEviction(cache, key, value) {
        // Remove if already exists to update position
        if (cache.has(key)) {
            cache.delete(key);
        }
        
        // Add to end (most recent)
        cache.set(key, value);
        
        // Evict oldest if over limit
        if (cache.size > this.maxCacheSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
            this.stats.evictions++;
        }
    }

    /**
     * Update memory usage statistics
     * @private
     */
    _updateMemoryUsage() {
        // Rough estimation of memory usage
        let usage = 0;
        
        // Count canvas elements (rough estimate: width * height * 4 bytes per pixel)
        [this.spriteFrameCache, this.transformCache, this.tileCache, this.effectCache].forEach(cache => {
            cache.forEach(canvas => {
                if (canvas && canvas.width && canvas.height) {
                    usage += canvas.width * canvas.height * 4;
                }
            });
        });
        
        // Animation cache contains arrays of canvases
        this.animationCache.forEach(frames => {
            if (Array.isArray(frames)) {
                frames.forEach(canvas => {
                    if (canvas && canvas.width && canvas.height) {
                        usage += canvas.width * canvas.height * 4;
                    }
                });
            }
        });
        
        this.stats.memoryUsage = usage;
    }

    /**
     * Draw a star shape
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {number} x - X position
     * @param {number} y - Y position
     * @param {number} points - Number of star points
     * @param {number} outerRadius - Outer radius
     * @param {number} innerRadius - Inner radius
     * @private
     */
    _drawStar(ctx, x, y, points, outerRadius, innerRadius) {
        const angle = Math.PI / points;
        ctx.beginPath();
        
        for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const currentAngle = i * angle - Math.PI / 2;
            const px = x + Math.cos(currentAngle) * radius;
            const py = y + Math.sin(currentAngle) * radius;
            
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }
        
        ctx.closePath();
        ctx.fill();
    }
}

class Spritesheet {
    /**
     * Create a spritesheet
     * @param {HTMLImageElement} image - Spritesheet image
     * @param {Object} config - Spritesheet configuration
     * @param {GameFramework} [game] - Game instance for cache access
     * @param {number} [config.frameWidth] - Width of each frame (for grid mode)
     * @param {number} [config.frameHeight] - Height of each frame (for grid mode)
     * @param {Object} [config.frames] - Named frame definitions {name: {x, y, width, height}}
     * @param {Object} [config.animations] - Animation definitions
     * @param {number} [config.defaultFrameDuration=0.1] - Default frame duration for animations
     */
    constructor(image, config = {}, game = null) {
        this.image = image;
        this.game = game;
        this.config = {
            defaultFrameDuration: 0.1,
            ...config
        };
        this.frames = new Map();
        this.animations = new Map();
        
        this._parseFrames();
        this._parseAnimations();
    }

    /**
     * Parse frame definitions from configuration
     * @private
     */
    _parseFrames() {
        if (this.config.frames) {
            // Named frame definitions
            Object.entries(this.config.frames).forEach(([name, frame]) => {
                this.frames.set(name, {
                    x: frame.x || 0,
                    y: frame.y || 0,
                    width: frame.width || frame.w || this.config.frameWidth,
                    height: frame.height || frame.h || this.config.frameHeight,
                    offsetX: frame.offsetX || frame.ox || 0,
                    offsetY: frame.offsetY || frame.oy || 0,
                    sourceWidth: frame.sourceWidth || frame.sw,
                    sourceHeight: frame.sourceHeight || frame.sh
                });
            });
        } else if (this.config.frameWidth && this.config.frameHeight) {
            // Grid-based frame generation
            const cols = Math.floor(this.image.width / this.config.frameWidth);
            const rows = Math.floor(this.image.height / this.config.frameHeight);
            
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const index = row * cols + col;
                    this.frames.set(index.toString(), {
                        x: col * this.config.frameWidth,
                        y: row * this.config.frameHeight,
                        width: this.config.frameWidth,
                        height: this.config.frameHeight,
                        offsetX: 0,
                        offsetY: 0
                    });
                }
            }
        }
    }

    /**
     * Parse animation definitions with enhanced features
     * @private
     */
    _parseAnimations() {
        if (this.config.animations) {
            Object.entries(this.config.animations).forEach(([name, anim]) => {
                // Support both array of frames and range notation
                let frames = anim.frames || [];
                if (typeof anim.frames === 'string') {
                    // Parse range notation like "0-5" or "idle_0-idle_3"
                    frames = this._parseFrameRange(anim.frames);
                }
                
                this.animations.set(name, {
                    frames,
                    frameDuration: anim.frameDuration || anim.duration || this.config.defaultFrameDuration,
                    loop: anim.loop !== false,
                    pingPong: anim.pingPong || false,
                    speed: anim.speed || 1,
                    onStart: anim.onStart || null,
                    onComplete: anim.onComplete || null,
                    onLoop: anim.onLoop || null,
                    onFrame: anim.onFrame || null,
                    nextAnimation: anim.nextAnimation || null,
                    priority: anim.priority || 0
                });
            });
        }
    }

    /**
     * Parse frame range notation
     * @param {string} range - Range string like "0-5" or "walk_0-walk_3"
     * @returns {Array} Array of frame names/indices
     * @private
     */
    _parseFrameRange(range) {
        const frames = [];
        
        if (range.includes('-')) {
            const parts = range.split('-');
            if (parts.length === 2) {
                const start = parts[0];
                const end = parts[1];
                
                // Check if it's numeric range
                if (!isNaN(start) && !isNaN(end)) {
                    const startNum = parseInt(start);
                    const endNum = parseInt(end);
                    for (let i = startNum; i <= endNum; i++) {
                        frames.push(i.toString());
                    }
                } else {
                    // Named frame range like "walk_0-walk_3"
                    const startMatch = start.match(/(.+)_(\d+)$/);
                    const endMatch = end.match(/(.+)_(\d+)$/);
                    
                    if (startMatch && endMatch && startMatch[1] === endMatch[1]) {
                        const prefix = startMatch[1];
                        const startNum = parseInt(startMatch[2]);
                        const endNum = parseInt(endMatch[2]);
                        
                        for (let i = startNum; i <= endNum; i++) {
                            frames.push(`${prefix}_${i}`);
                        }
                    }
                }
            }
        } else {
            // Single frame or comma-separated list
            frames.push(...range.split(',').map(f => f.trim()));
        }
        
        return frames;
    }

    /**
     * Get a sprite frame by name or index
     * @param {string|number} name - Frame name or index
     * @returns {Object|null} Frame data or null
     */
    getSprite(name) {
        return this.frames.get(name.toString()) || null;
    }

    /**
     * Get animation data by name
     * @param {string} name - Animation name
     * @returns {Object|null} Animation data or null
     */
    getAnimation(name) {
        return this.animations.get(name) || null;
    }

    /**
     * Get all available frame names
     * @returns {Array<string>} Array of frame names
     */
    getFrameNames() {
        return Array.from(this.frames.keys());
    }

    /**
     * Get all available animation names
     * @returns {Array<string>} Array of animation names
     */
    getAnimationNames() {
        return Array.from(this.animations.keys());
    }

    /**
     * Create an animation player for this spritesheet
     * @param {Object} [config={}] - Animation player configuration
     * @returns {AnimationPlayer} New animation player instance
     */
    createAnimationPlayer(config = {}) {
        return new AnimationPlayer(this, config);
    }
    
    /**
     * Get spritesheet image dimensions and grid information
     * @returns {Object} Dimension information
     */
    getImageInfo() {
        const info = {
            width: this.image.width,
            height: this.image.height,
            frameWidth: this.config.frameWidth,
            frameHeight: this.config.frameHeight
        };
        
        if (this.config.frameWidth && this.config.frameHeight) {
            info.cols = Math.floor(this.image.width / this.config.frameWidth);
            info.rows = Math.floor(this.image.height / this.config.frameHeight);
            info.totalFrames = info.cols * info.rows;
        }
        
        return info;
    }
    
    /**
     * Suggest optimal frame configuration based on image dimensions
     * @param {number} [targetFrameSize] - Preferred frame size (will use largest square that divides evenly)
     * @returns {Object} Suggested configuration
     */
    suggestFrameConfig(targetFrameSize = null) {
        const width = this.image.width;
        const height = this.image.height;
        
        // If target size specified, check if it works
        if (targetFrameSize) {
            if (width % targetFrameSize === 0 && height % targetFrameSize === 0) {
                return {
                    frameWidth: targetFrameSize,
                    frameHeight: targetFrameSize,
                    cols: width / targetFrameSize,
                    rows: height / targetFrameSize,
                    totalFrames: (width / targetFrameSize) * (height / targetFrameSize)
                };
            }
        }
        
        // Find common divisors for optimal frame sizes
        const suggestions = [];
        
        // Common game sprite sizes to test
        const commonSizes = [16, 24, 32, 48, 64, 96, 128];
        
        for (const size of commonSizes) {
            if (width % size === 0 && height % size === 0) {
                suggestions.push({
                    frameWidth: size,
                    frameHeight: size,
                    cols: width / size,
                    rows: height / size,
                    totalFrames: (width / size) * (height / size),
                    recommended: size === 48 || size === 32 || size === 64 // Mark common sizes
                });
            }
        }
        
        // If no common sizes work, find the largest square divisor
        if (suggestions.length === 0) {
            for (let size = Math.min(width, height); size >= 8; size--) {
                if (width % size === 0 && height % size === 0) {
                    suggestions.push({
                        frameWidth: size,
                        frameHeight: size,
                        cols: width / size,
                        rows: height / size,
                        totalFrames: (width / size) * (height / size),
                        recommended: true
                    });
                    break;
                }
            }
        }
        
        return {
            imageSize: { width, height },
            suggestions: suggestions.sort((a, b) => {
                // Prefer recommended sizes, then larger frame sizes
                if (a.recommended && !b.recommended) return -1;
                if (!a.recommended && b.recommended) return 1;
                return b.frameWidth - a.frameWidth;
            })
        };
    }
    
    /**
     * Auto-detect sprite configuration for common patterns
     * @param {string} [pattern='auto'] - Pattern to detect ('4dir', '8dir', 'auto')
     * @returns {Object} Detected configuration with animation suggestions
     */
    detectSpritePattern(pattern = 'auto') {
        const info = this.getImageInfo();
        if (!info.cols || !info.rows) {
            return { error: 'Frame dimensions not set' };
        }
        
        const result = {
            frameConfig: {
                frameWidth: info.frameWidth,
                frameHeight: info.frameHeight,
                cols: info.cols,
                rows: info.rows,
                totalFrames: info.totalFrames
            },
            detectedPattern: null,
            suggestedAnimations: {}
        };
        
        // Auto-detect common patterns
        if (pattern === 'auto' || pattern === '4dir') {
            // 4-directional character sprite (rows = directions)
            if (info.rows === 4) {
                result.detectedPattern = '4-directional';
                const frameRanges = [];
                const idleFrames = [];
                
                for (let row = 0; row < 4; row++) {
                    const startFrame = row * info.cols;
                    const endFrame = startFrame + info.cols - 1;
                    frameRanges.push({ start: startFrame, end: endFrame });
                    idleFrames.push(endFrame); // Last frame as idle
                }
                
                const directions = ['north', 'east', 'south', 'west'];
                directions.forEach((dir, i) => {
                    result.suggestedAnimations[`idle_${dir}`] = {
                        frames: [idleFrames[i]],
                        frameDuration: 1,
                        loop: true
                    };
                    
                    if (info.cols > 1) {
                        const walkFrames = [];
                        for (let j = frameRanges[i].start; j < frameRanges[i].end; j++) {
                            walkFrames.push(j);
                        }
                        result.suggestedAnimations[`walk_${dir}`] = {
                            frames: walkFrames,
                            frameDuration: 0.15,
                            loop: true
                        };
                    }
                });
            }
        }
        
        if (pattern === 'auto' || pattern === '8dir') {
            // 8-directional character sprite
            if (info.rows === 8) {
                result.detectedPattern = '8-directional';
                const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
                directions.forEach((dir, i) => {
                    const startFrame = i * info.cols;
                    const idleFrame = startFrame + info.cols - 1;
                    
                    result.suggestedAnimations[`idle_${dir}`] = {
                        frames: [idleFrame],
                        frameDuration: 1,
                        loop: true
                    };
                    
                    if (info.cols > 1) {
                        const walkFrames = [];
                        for (let j = startFrame; j < idleFrame; j++) {
                            walkFrames.push(j);
                        }
                        result.suggestedAnimations[`walk_${dir}`] = {
                            frames: walkFrames,
                            frameDuration: 0.12,
                            loop: true
                        };
                    }
                });
            }
        }
        
        return result;
    }

    /**
     * Load spritesheet from JSON configuration file
     * @param {string} jsonUrl - URL to JSON configuration
     * @param {string} imageUrl - URL to spritesheet image
     * @returns {Promise<Spritesheet>} Promise resolving to loaded spritesheet
     * @static
     */
    static async loadFromJSON(jsonUrl, imageUrl, game = null) {
        const [configResponse, image] = await Promise.all([
            fetch(jsonUrl).then(r => r.json()),
            new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = imageUrl;
            })
        ]);
        
        return new Spritesheet(image, configResponse, game);
    }
}

/**
 * Animation Player class for easy sprite animation control
 * Handles animation playback, state management, and event callbacks
 * 
 * @example
 * const player = spritesheet.createAnimationPlayer();
 * player.play('walk');
 * player.onComplete = () => player.play('idle');
 * 
 * // In game loop
 * player.update(deltaTime);
 * renderer.drawSprite(spritesheet, player.getCurrentFrame(), x, y);
 */
class AnimationPlayer {
    /**
     * Create an animation player
     * @param {Spritesheet} spritesheet - Spritesheet to use for animations
     * @param {Object} [config={}] - Configuration options
     * @param {string} [config.defaultAnimation] - Default animation to play
     * @param {boolean} [config.autoPlay=false] - Auto-play default animation
     * @param {number} [config.speed=1] - Global animation speed multiplier
     */
    constructor(spritesheet, config = {}) {
        this.spritesheet = spritesheet;
        this.config = {
            defaultAnimation: null,
            autoPlay: false,
            speed: 1,
            ...config
        };
        
        // Current animation state
        this.currentAnimation = null;
        this.currentFrameIndex = 0;
        this.frameTimer = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.direction = 1; // 1 for forward, -1 for reverse (ping-pong)
        this.loopCount = 0;
        
        // Animation queue for chaining
        this.animationQueue = [];
        
        // Event callbacks
        this.onStart = null;
        this.onComplete = null;
        this.onLoop = null;
        this.onFrame = null;
        this.onAnimationChange = null;
        
        // Animation state machine
        this.states = new Map();
        this.currentState = null;
        
        // Auto-play setup
        if (this.config.autoPlay && this.config.defaultAnimation) {
            this.play(this.config.defaultAnimation);
        }
    }

    /**
     * Play an animation
     * @param {string} animationName - Name of animation to play
     * @param {Object} [options={}] - Playback options
     * @param {boolean} [options.force=false] - Force play even if same animation
     * @param {boolean} [options.reset=true] - Reset animation to beginning
     * @param {number} [options.speed] - Override animation speed
     * @param {Function} [options.onComplete] - One-time completion callback
     * @returns {boolean} True if animation started successfully
     */
    play(animationName, options = {}) {
        const animation = this.spritesheet.getAnimation(animationName);
        if (!animation) {
            console.warn(`Animation '${animationName}' not found in spritesheet`);
            return false;
        }
        
        const {
            force = false,
            reset = true,
            speed,
            onComplete
        } = options;
        
        // Check if we're already playing this animation
        if (!force && this.currentAnimation === animationName && this.isPlaying) {
            return true;
        }
        
        // Stop current animation
        if (this.currentAnimation && this.currentAnimation !== animationName) {
            this.stop();
        }
        
        // Set up new animation
        this.currentAnimation = animationName;
        this.isPlaying = true;
        this.isPaused = false;
        this.direction = 1;
        this.loopCount = 0;
        
        if (reset) {
            this.currentFrameIndex = 0;
            this.frameTimer = 0;
        }
        
        // Override speed if specified
        if (speed !== undefined) {
            animation.speed = speed;
        }
        
        // Set one-time callback
        if (onComplete) {
            this._tempOnComplete = onComplete;
        }
        
        // Call start event
        if (animation.onStart) {
            animation.onStart(this);
        }
        if (this.onStart) {
            this.onStart(animationName);
        }
        if (this.onAnimationChange) {
            this.onAnimationChange(animationName, this.currentAnimation);
        }
        
        return true;
    }

    /**
     * Stop the current animation
     */
    stop() {
        this.isPlaying = false;
        this.isPaused = false;
        this.currentAnimation = null;
        this.currentFrameIndex = 0;
        this.frameTimer = 0;
        this.direction = 1;
        this.loopCount = 0;
        this._tempOnComplete = null;
    }

    /**
     * Pause the current animation
     */
    pause() {
        this.isPaused = true;
    }

    /**
     * Resume the paused animation
     */
    resume() {
        this.isPaused = false;
    }

    /**
     * Set animation to a specific frame
     * @param {number} frameIndex - Frame index to set
     */
    setFrame(frameIndex) {
        if (!this.currentAnimation) return;
        
        const animation = this.spritesheet.getAnimation(this.currentAnimation);
        if (animation && frameIndex >= 0 && frameIndex < animation.frames.length) {
            this.currentFrameIndex = frameIndex;
            this.frameTimer = 0;
        }
    }

    /**
     * Get the current frame name/index
     * @returns {string|number|null} Current frame identifier
     */
    getCurrentFrame() {
        if (!this.currentAnimation) return null;
        
        const animation = this.spritesheet.getAnimation(this.currentAnimation);
        if (!animation || this.currentFrameIndex >= animation.frames.length) {
            return null;
        }
        
        return animation.frames[this.currentFrameIndex];
    }

    /**
     * Get cached animation frame for optimized rendering
     * @param {Object} [transform] - Optional transform to apply
     * @returns {HTMLCanvasElement|null} Cached frame canvas or null
     */
    getCachedFrame(transform = {}) {
        if (!this.currentAnimation || !this.spritesheet.game?.renderCache) {
            return null;
        }
        
        // Check if we have cached animation sequence
        const cacheKey = this.spritesheet.game.renderCache.generateAnimationKey(
            this.spritesheet.image.src || 'sheet',
            this.currentAnimation,
            transform
        );
        
        let cachedFrames = this.spritesheet.game.renderCache.animationCache.get(cacheKey);
        
        if (!cachedFrames) {
            // Cache the animation sequence
            cachedFrames = this.spritesheet.game.renderCache.cacheAnimationSequence(
                cacheKey,
                this.spritesheet,
                this.currentAnimation,
                transform
            );
        }
        
        if (cachedFrames && this.currentFrameIndex < cachedFrames.length) {
            return cachedFrames[this.currentFrameIndex];
        }
        
        return null;
    }

    /**
     * Get current animation progress (0-1)
     * @returns {number} Animation progress
     */
    getProgress() {
        if (!this.currentAnimation) return 0;
        
        const animation = this.spritesheet.getAnimation(this.currentAnimation);
        if (!animation) return 0;
        
        return this.currentFrameIndex / (animation.frames.length - 1);
    }

    /**
     * Check if animation is currently playing
     * @returns {boolean} True if playing
     */
    isPlaying() {
        return this.isPlaying && !this.isPaused;
    }

    /**
     * Queue an animation to play after current one completes
     * @param {string} animationName - Animation to queue
     * @param {Object} [options={}] - Playback options
     */
    queue(animationName, options = {}) {
        this.animationQueue.push({ name: animationName, options });
    }

    /**
     * Clear the animation queue
     */
    clearQueue() {
        this.animationQueue.length = 0;
    }

    /**
     * Update animation playback
     * @param {number} deltaTime - Time since last frame in seconds
     */
    update(deltaTime) {
        if (!this.isPlaying || this.isPaused || !this.currentAnimation) {
            return;
        }
        
        const animation = this.spritesheet.getAnimation(this.currentAnimation);
        if (!animation || animation.frames.length === 0) {
            return;
        }
        
        // Apply speed multipliers
        const effectiveDelta = deltaTime * this.config.speed * (animation.speed || 1);
        this.frameTimer += effectiveDelta;
        
        // Check if it's time to advance frame
        if (this.frameTimer >= animation.frameDuration) {
            this.frameTimer -= animation.frameDuration;
            
            // Advance frame
            this.currentFrameIndex += this.direction;
            
            // Handle ping-pong animation
            if (animation.pingPong) {
                if (this.currentFrameIndex >= animation.frames.length) {
                    this.currentFrameIndex = animation.frames.length - 2;
                    this.direction = -1;
                } else if (this.currentFrameIndex < 0) {
                    this.currentFrameIndex = 1;
                    this.direction = 1;
                }
            } else {
                // Handle normal looping
                if (this.currentFrameIndex >= animation.frames.length) {
                    if (animation.loop) {
                        this.currentFrameIndex = 0;
                        this.loopCount++;
                        
                        // Call loop event
                        if (animation.onLoop) {
                            animation.onLoop(this, this.loopCount);
                        }
                        if (this.onLoop) {
                            this.onLoop(this.currentAnimation, this.loopCount);
                        }
                    } else {
                        // Animation completed
                        this.currentFrameIndex = animation.frames.length - 1;
                        this._handleAnimationComplete(animation);
                        return;
                    }
                }
            }
            
            // Call frame event
            if (animation.onFrame) {
                animation.onFrame(this, this.currentFrameIndex);
            }
            if (this.onFrame) {
                this.onFrame(this.currentAnimation, this.currentFrameIndex);
            }
        }
    }

    /**
     * Handle animation completion
     * @param {Object} animation - Animation that completed
     * @private
     */
    _handleAnimationComplete(animation) {
        const completedAnimation = this.currentAnimation;
        
        // Call completion events
        if (animation.onComplete) {
            animation.onComplete(this);
        }
        if (this.onComplete) {
            this.onComplete(completedAnimation);
        }
        if (this._tempOnComplete) {
            this._tempOnComplete(completedAnimation);
            this._tempOnComplete = null;
        }
        
        // Handle next animation
        if (animation.nextAnimation) {
            this.play(animation.nextAnimation);
        } else if (this.animationQueue.length > 0) {
            // Play queued animation
            const next = this.animationQueue.shift();
            this.play(next.name, next.options);
        } else {
            // Stop animation
            this.stop();
        }
    }

    /**
     * Add an animation state for state machine functionality
     * @param {string} stateName - Name of the state
     * @param {Object} stateConfig - State configuration
     * @param {string} stateConfig.animation - Animation to play in this state
     * @param {Object} [stateConfig.transitions] - Valid transitions from this state
     * @param {Function} [stateConfig.onEnter] - Called when entering state
     * @param {Function} [stateConfig.onExit] - Called when exiting state
     * @param {Function} [stateConfig.onUpdate] - Called during state update
     */
    addState(stateName, stateConfig) {
        this.states.set(stateName, {
            animation: stateConfig.animation,
            transitions: stateConfig.transitions || {},
            onEnter: stateConfig.onEnter || null,
            onExit: stateConfig.onExit || null,
            onUpdate: stateConfig.onUpdate || null,
            conditions: stateConfig.conditions || {}
        });
    }

    /**
     * Transition to a new animation state
     * @param {string} stateName - State to transition to
     * @param {boolean} [force=false] - Force transition even if not valid
     * @returns {boolean} True if transition was successful
     */
    transitionToState(stateName, force = false) {
        const targetState = this.states.get(stateName);
        if (!targetState) {
            console.warn(`Animation state '${stateName}' not found`);
            return false;
        }
        
        // Check if transition is valid
        if (!force && this.currentState) {
            const currentStateData = this.states.get(this.currentState);
            if (currentStateData && currentStateData.transitions) {
                if (!currentStateData.transitions[stateName]) {
                    console.warn(`Invalid transition from '${this.currentState}' to '${stateName}'`);
                    return false;
                }
            }
        }
        
        // Exit current state
        if (this.currentState) {
            const currentStateData = this.states.get(this.currentState);
            if (currentStateData && currentStateData.onExit) {
                currentStateData.onExit(this);
            }
        }
        
        // Enter new state
        this.currentState = stateName;
        if (targetState.onEnter) {
            targetState.onEnter(this);
        }
        
        // Play animation
        this.play(targetState.animation);
        
        return true;
    }

    /**
     * Get current animation state
     * @returns {string|null} Current state name
     */
    getCurrentState() {
        return this.currentState;
    }

    /**
     * Update state machine (call this in addition to regular update)
     * @param {number} deltaTime - Time since last frame
     */
    updateStateMachine(deltaTime) {
        if (this.currentState) {
            const stateData = this.states.get(this.currentState);
            if (stateData && stateData.onUpdate) {
                stateData.onUpdate(this, deltaTime);
            }
        }
    }
}

/**
 * Particle system for creating visual effects like explosions, magic, trails, etc.
 * Supports both light particles and image-based particles with advanced behaviors
 */
class ParticleSystem {
    constructor(game) {
        this.game = game;
        this.emitters = [];
        this.particles = [];
        this.maxParticles = 10000;
    }

    /**
     * Create a particle emitter
     * @param {Object} config - Emitter configuration
     * @param {number} config.x - X position
     * @param {number} config.y - Y position
     * @param {string} [config.type='light'] - Particle type: 'light' or 'image'
     * @param {HTMLImageElement} [config.texture] - Texture for image particles
     * @param {number} [config.rate=10] - Particles per second
     * @param {number} [config.lifetime=1] - Particle lifetime in seconds
     * @param {Object} [config.velocity] - Velocity configuration
     * @param {Object} [config.color] - Color configuration
     * @param {Object} [config.size] - Size configuration
     * @returns {ParticleEmitter} Created emitter
     */
    createEmitter(config) {
        const emitter = new ParticleEmitter(this, config);
        this.emitters.push(emitter);
        return emitter;
    }

    /**
     * Remove an emitter
     * @param {ParticleEmitter} emitter - Emitter to remove
     */
    removeEmitter(emitter) {
        const index = this.emitters.indexOf(emitter);
        if (index > -1) {
            this.emitters.splice(index, 1);
        }
    }

    /**
     * Update all particles and emitters
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        // Update emitters
        this.emitters.forEach(emitter => emitter.update(deltaTime));
        
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.update(deltaTime);
            
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    /**
     * Render all particles
     * @param {Renderer} renderer - Renderer instance
     */
    render(renderer) {
        this.particles.forEach(particle => particle.render(renderer));
    }

    /**
     * Add a particle to the system
     * @param {Particle} particle - Particle to add
     */
    addParticle(particle) {
        if (this.particles.length < this.maxParticles) {
            this.particles.push(particle);
        }
    }

    /**
     * Clear all particles and emitters
     */
    clear() {
        this.particles.length = 0;
        this.emitters.length = 0;
    }
}

/**
 * Particle emitter that creates and manages particles
 */
class ParticleEmitter {
    constructor(system, config) {
        this.system = system;
        this.config = {
            x: 0,
            y: 0,
            type: 'light',
            texture: null,
            rate: 10,
            lifetime: 1,
            velocity: { min: 50, max: 100, angle: 0, spread: Math.PI * 2 },
            color: { r: 255, g: 255, b: 255, a: 1 },
            size: { min: 2, max: 8 },
            gravity: { x: 0, y: 0 },
            fadeOut: true,
            shrink: false,
            // Spawn shape configuration
            spawnShape: 'point', // 'point', 'circle', 'rectangle', 'square', 'triangle', 'line'
            spawnArea: { width: 50, height: 50, radius: 25 }, // Dimensions for shapes
            spawnEdgeOnly: false, // Only spawn on edges/perimeter of shapes
            ...config
        };
        
        this.emissionTimer = 0;
        this.active = true;
        this.duration = Infinity;
        this.age = 0;
    }

    /**
     * Update emitter and emit particles
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        if (!this.active) return;
        
        this.age += deltaTime;
        if (this.age >= this.duration) {
            this.active = false;
            return;
        }
        
        this.emissionTimer += deltaTime;
        const emissionInterval = 1 / this.config.rate;
        
        while (this.emissionTimer >= emissionInterval) {
            this.emitParticle();
            this.emissionTimer -= emissionInterval;
        }
    }

    /**
     * Emit a single particle with shape-based spawning
     */
    emitParticle() {
        // Get spawn position based on shape
        const spawnPos = this._getSpawnPosition();
        
        const angle = this.config.velocity.angle + 
                     (Math.random() - 0.5) * this.config.velocity.spread;
        const speed = this.config.velocity.min + 
                     Math.random() * (this.config.velocity.max - this.config.velocity.min);
        
        const particle = new Particle({
            x: spawnPos.x,
            y: spawnPos.y,
            type: this.config.type,
            texture: this.config.texture,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: this.config.lifetime,
            maxLife: this.config.lifetime,
            color: { ...this.config.color },
            size: this.config.size.min + Math.random() * (this.config.size.max - this.config.size.min),
            gravity: { ...this.config.gravity },
            fadeOut: this.config.fadeOut,
            shrink: this.config.shrink
        });
        
        this.system.addParticle(particle);
    }

    /**
     * Get spawn position based on configured shape
     * @returns {{x: number, y: number}} Spawn position
     * @private
     */
    _getSpawnPosition() {
        const baseX = this.config.x;
        const baseY = this.config.y;
        const { width, height, radius } = this.config.spawnArea;
        const edgeOnly = this.config.spawnEdgeOnly;

        switch (this.config.spawnShape) {
            case 'point':
                return { x: baseX, y: baseY };

            case 'circle':
                if (edgeOnly) {
                    // Spawn on circle perimeter
                    const angle = Math.random() * Math.PI * 2;
                    return {
                        x: baseX + Math.cos(angle) * radius,
                        y: baseY + Math.sin(angle) * radius
                    };
                } else {
                    // Spawn within circle area
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.sqrt(Math.random()) * radius;
                    return {
                        x: baseX + Math.cos(angle) * distance,
                        y: baseY + Math.sin(angle) * distance
                    };
                }

            case 'rectangle':
                if (edgeOnly) {
                    // Spawn on rectangle perimeter
                    const perimeter = 2 * (width + height);
                    const t = Math.random() * perimeter;
                    
                    if (t < width) {
                        // Top edge
                        return { x: baseX - width/2 + t, y: baseY - height/2 };
                    } else if (t < width + height) {
                        // Right edge
                        return { x: baseX + width/2, y: baseY - height/2 + (t - width) };
                    } else if (t < 2 * width + height) {
                        // Bottom edge
                        return { x: baseX + width/2 - (t - width - height), y: baseY + height/2 };
                    } else {
                        // Left edge
                        return { x: baseX - width/2, y: baseY + height/2 - (t - 2 * width - height) };
                    }
                } else {
                    // Spawn within rectangle area
                    return {
                        x: baseX + (Math.random() - 0.5) * width,
                        y: baseY + (Math.random() - 0.5) * height
                    };
                }

            case 'square':
                const size = Math.min(width, height);
                if (edgeOnly) {
                    // Spawn on square perimeter
                    const side = Math.floor(Math.random() * 4);
                    const t = Math.random();
                    
                    switch (side) {
                        case 0: // Top
                            return { x: baseX - size/2 + t * size, y: baseY - size/2 };
                        case 1: // Right
                            return { x: baseX + size/2, y: baseY - size/2 + t * size };
                        case 2: // Bottom
                            return { x: baseX + size/2 - t * size, y: baseY + size/2 };
                        case 3: // Left
                            return { x: baseX - size/2, y: baseY + size/2 - t * size };
                    }
                } else {
                    // Spawn within square area
                    return {
                        x: baseX + (Math.random() - 0.5) * size,
                        y: baseY + (Math.random() - 0.5) * size
                    };
                }

            case 'triangle':
                if (edgeOnly) {
                    // Spawn on triangle perimeter
                    const side = Math.floor(Math.random() * 3);
                    const t = Math.random();
                    const h = height * 0.866; // height for equilateral triangle
                    
                    switch (side) {
                        case 0: // Bottom edge
                            return {
                                x: baseX - width/2 + t * width,
                                y: baseY + h/3
                            };
                        case 1: // Left edge
                            return {
                                x: baseX - width/2 + t * width/2,
                                y: baseY + h/3 - t * h
                            };
                        case 2: // Right edge
                            return {
                                x: baseX + t * width/2,
                                y: baseY + h/3 - t * h
                            };
                    }
                } else {
                    // Spawn within triangle area using barycentric coordinates
                    let r1 = Math.random();
                    let r2 = Math.random();
                    
                    if (r1 + r2 > 1) {
                        r1 = 1 - r1;
                        r2 = 1 - r2;
                    }
                    
                    const h = height * 0.866;
                    return {
                        x: baseX + (r1 - 0.5) * width + (r2 - 0.5) * width/2,
                        y: baseY + h/3 - r2 * h
                    };
                }

            case 'line':
                // Spawn along a line
                const t = Math.random();
                const angle = this.config.velocity.angle || 0;
                const lineLength = Math.max(width, height);
                
                return {
                    x: baseX + Math.cos(angle) * (t - 0.5) * lineLength,
                    y: baseY + Math.sin(angle) * (t - 0.5) * lineLength
                };

            default:
                return { x: baseX, y: baseY };
        }
    }

    /**
     * Set emitter position
     * @param {number} x - X position
     * @param {number} y - Y position
     */
    setPosition(x, y) {
        this.config.x = x;
        this.config.y = y;
    }

    /**
     * Start emitting particles
     */
    start() {
        this.active = true;
        this.age = 0;
    }

    /**
     * Stop emitting particles
     */
    stop() {
        this.active = false;
    }

    /**
     * Burst emit a number of particles at once
     * @param {number} count - Number of particles to emit
     */
    burst(count) {
        for (let i = 0; i < count; i++) {
            this.emitParticle();
        }
    }
}

/**
 * Individual particle with physics and rendering
 */
class Particle {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.vx = config.vx || 0;
        this.vy = config.vy || 0;
        this.type = config.type || 'light';
        this.texture = config.texture || null;
        this.life = config.life || 1;
        this.maxLife = config.maxLife || 1;
        this.color = config.color || { r: 255, g: 255, b: 255, a: 1 };
        this.size = config.size || 4;
        this.initialSize = this.size;
        this.gravity = config.gravity || { x: 0, y: 0 };
        this.fadeOut = config.fadeOut !== false;
        this.shrink = config.shrink || false;
        this.rotation = config.rotation || 0;
        this.angularVelocity = config.angularVelocity || 0;
    }

    /**
     * Update particle physics and properties
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        // Apply gravity
        this.vx += this.gravity.x * deltaTime;
        this.vy += this.gravity.y * deltaTime;
        
        // Update position
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
        
        // Update rotation
        this.rotation += this.angularVelocity * deltaTime;
        
        // Update life
        this.life -= deltaTime;
        const lifeRatio = this.life / this.maxLife;
        
        // Apply effects based on life
        if (this.fadeOut) {
            this.color.a = lifeRatio;
        }
        
        if (this.shrink) {
            this.size = this.initialSize * lifeRatio;
        }
    }

    /**
     * Render the particle
     * @param {Renderer} renderer - Renderer instance
     */
    render(renderer) {
        if (this.life <= 0) return;
        
        if (this.type === 'image' && this.texture) {
            renderer.drawImage(this.texture, this.x - this.size / 2, this.y - this.size / 2, {
                width: this.size,
                height: this.size,
                alpha: this.color.a,
                rotation: this.rotation
            });
        } else {
            // Light particle (circle)
            const ctx = renderer.ctx;
            ctx.save();
            ctx.globalAlpha = this.color.a;
            ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
}

/**
 * Advanced tweening system with easing functions and chaining support
 * Provides smooth animations for any numeric property
 */
class TweenManager {
    constructor(game) {
        this.game = game;
        this.tweens = [];
        
        // Object pooling for better performance with many tweens
        this.tweenPool = [];
        this.maxPoolSize = 50;
        
        // Performance monitoring
        this.stats = {
            activeTweens: 0,
            pooledTweens: 0,
            totalCreated: 0,
            totalPooled: 0
        };
    }

    /**
     * Create a new tween
     * @param {Object} target - Object to tween
     * @param {Object} properties - Properties to animate
     * @param {number} duration - Duration in seconds
     * @param {Object} [options={}] - Tween options
     * @param {string} [options.easing='linear'] - Easing function name
     * @param {number} [options.delay=0] - Delay before starting
     * @param {Function} [options.onUpdate] - Update callback
     * @param {Function} [options.onComplete] - Completion callback
     * @param {boolean} [options.yoyo=false] - Reverse animation
     * @param {number} [options.repeat=0] - Number of repeats
     * @returns {Tween} Created tween
     */
    to(target, properties, duration, options = {}) {
        const tween = this._getTweenFromPool(target, properties, duration, options);
        this.tweens.push(tween);
        tween.start();
        this.stats.activeTweens = this.tweens.length;
        return tween;
    }
    
    /**
     * Get a tween from the pool or create new one
     * @param {Object} target - Target object
     * @param {Object} properties - Properties to animate
     * @param {number} duration - Duration in seconds
     * @param {Object} options - Tween options
     * @returns {Tween} Tween instance
     * @private
     */
    _getTweenFromPool(target, properties, duration, options) {
        let tween;
        
        if (this.tweenPool.length > 0) {
            tween = this.tweenPool.pop();
            tween.reset(target, properties, duration, options);
            this.stats.pooledTweens = this.tweenPool.length;
        } else {
            tween = new Tween(target, properties, duration, options);
            this.stats.totalCreated++;
        }
        
        return tween;
    }
    
    /**
     * Return a tween to the pool
     * @param {Tween} tween - Tween to return to pool
     * @private
     */
    _returnTweenToPool(tween) {
        if (this.tweenPool.length < this.maxPoolSize) {
            this.tweenPool.push(tween);
            this.stats.totalPooled++;
            this.stats.pooledTweens = this.tweenPool.length;
        }
    }

    /**
     * Create a tween from current values
     * @param {Object} target - Object to tween
     * @param {Object} fromProperties - Starting properties
     * @param {Object} toProperties - Target properties
     * @param {number} duration - Duration in seconds
     * @param {Object} [options={}] - Tween options
     * @returns {Tween} Created tween
     */
    fromTo(target, fromProperties, toProperties, duration, options = {}) {
        Object.assign(target, fromProperties);
        return this.to(target, toProperties, duration, options);
    }

    /**
     * Update all active tweens (optimized for many simultaneous tweens)
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        if (this.tweens.length === 0) return;
        
        // Batch process completed tweens to avoid frequent array splicing
        const completedTweens = [];
        
        for (let i = 0; i < this.tweens.length; i++) {
            const tween = this.tweens[i];
            tween.update(deltaTime);
            
            if (tween.isComplete()) {
                completedTweens.push(i);
            }
        }
        
        // Remove completed tweens in reverse order to maintain indices
        for (let i = completedTweens.length - 1; i >= 0; i--) {
            const tween = this.tweens[completedTweens[i]];
            this._returnTweenToPool(tween);
            this.tweens.splice(completedTweens[i], 1);
        }
        
        this.stats.activeTweens = this.tweens.length;
    }

    /**
     * Remove a specific tween
     * @param {Tween} tween - Tween to remove
     */
    remove(tween) {
        const index = this.tweens.indexOf(tween);
        if (index > -1) {
            this.tweens.splice(index, 1);
        }
    }

    /**
     * Remove all tweens for a target
     * @param {Object} target - Target object
     */
    removeTarget(target) {
        this.tweens = this.tweens.filter(tween => tween.target !== target);
    }

    /**
     * Clear all tweens
     */
    clear() {
        this.tweens.length = 0;
    }

    /**
     * Create a tween sequence (chain multiple tweens easily)
     * @param {Array} sequence - Array of tween configurations
     * @returns {Tween} First tween in the sequence
     * 
     * @example
     * tweenManager.sequence([
     *   { target: obj, to: { x: 100 }, duration: 1 },
     *   { func: () => console.log('Middle!') },
     *   { target: obj, to: { y: 100 }, duration: 1 },
     *   { delay: 0.5 },
     *   { target: obj, to: { x: 0, y: 0 }, duration: 1 }
     * ]);
     */
    sequence(sequence) {
        if (sequence.length === 0) return null;
        
        let currentTween = null;
        let firstTween = null;
        
        sequence.forEach((config, index) => {
            let nextTween = null;
            
            if (config.func) {
                // Function call in sequence
                if (currentTween) {
                    currentTween.then(config.func, ...(config.args || []));
                }
                return; // Functions don't create new tweens
            } else if (config.delay) {
                // Delay in sequence
                nextTween = new Tween({}, {}, config.delay, { onComplete: () => {} });
            } else {
                // Regular tween
                nextTween = new Tween(
                    config.target, 
                    config.to || config.properties, 
                    config.duration, 
                    config.options || {}
                );
            }
            
            if (nextTween) {
                this.tweens.push(nextTween);
                
                if (currentTween) {
                    currentTween.chainWith(nextTween);
                } else {
                    firstTween = nextTween;
                }
                
                currentTween = nextTween;
            }
        });
        
        if (firstTween) {
            firstTween.start();
        }
        
        return firstTween;
    }

    /**
     * Create parallel tweens that run simultaneously
     * @param {Array} tweens - Array of tween configurations
     * @returns {Array<Tween>} Array of created tweens
     */
    parallel(tweens) {
        const createdTweens = tweens.map(config => {
            const tween = new Tween(
                config.target,
                config.to || config.properties,
                config.duration,
                config.options || {}
            );
            this.tweens.push(tween);
            tween.start();
            return tween;
        });
        
        return createdTweens;
    }

    /**
     * Get tween performance statistics
     * @returns {Object} Performance statistics
     */
    getStats() {
        return {
            ...this.stats,
            poolSize: this.tweenPool.length,
            maxPoolSize: this.maxPoolSize
        };
    }

    /**
     * Set maximum pool size for tweens
     * @param {number} size - Maximum pool size
     */
    setMaxPoolSize(size) {
        this.maxPoolSize = Math.max(0, size);
        
        // Trim pool if it's too large
        while (this.tweenPool.length > this.maxPoolSize) {
            this.tweenPool.pop();
        }
        
        this.stats.pooledTweens = this.tweenPool.length;
    }
}

/**
 * Individual tween instance
 */
class Tween {
    constructor(target, properties, duration, options = {}) {
        this.target = target;
        this.toProperties = properties;
        this.duration = duration;
        this.options = {
            easing: 'linear',
            delay: 0,
            onUpdate: null,
            onComplete: null,
            yoyo: false,
            repeat: 0,
            ...options
        };
        
        this.fromProperties = {};
        this.time = 0;
        this.delayTime = 0;
        this.started = false;
        this.completed = false;
        this.reversed = false;
        this.repeatCount = 0;
        this.loopCount = 0;
        this.chainedTween = null;
        this._tempOnComplete = null;
        this._cachedKeys = null;
        
        this.chain = [];
    }

    /**
     * Reset tween for object pooling
     * @param {Object} target - New target object
     * @param {Object} properties - New properties to animate
     * @param {number} duration - New duration
     * @param {Object} options - New options
     */
    reset(target, properties, duration, options = {}) {
        this.target = target;
        this.toProperties = properties;
        this.duration = duration;
        this.options = {
            easing: 'linear',
            delay: 0,
            onUpdate: null,
            onComplete: null,
            yoyo: false,
            repeat: 0,
            ...options
        };
        
        this.fromProperties = {};
        this.time = 0;
        this.delayTime = 0;
        this.started = false;
        this.completed = false;
        this.reversed = false;
        this.repeatCount = 0;
        this.loopCount = 0;
        this.chainedTween = null;
        this._tempOnComplete = null;
        this._cachedKeys = null;
        this.chain = [];
    }

    /**
     * Start the tween
     */
    start() {
        if (this.started) return this;
        
        // Store initial values
        Object.keys(this.toProperties).forEach(key => {
            this.fromProperties[key] = this.target[key];
        });
        
        this.started = true;
        return this;
    }

    /**
     * Update the tween (optimized for performance)
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        if (!this.started || this.completed) return;
        
        // Handle delay
        if (this.delayTime < this.options.delay) {
            this.delayTime += deltaTime;
            return;
        }
        
        this.time += deltaTime;
        let progress = Math.min(this.time / this.duration, 1);
        
        // Apply easing
        const easedProgress = this.applyEasing(progress);
        
        // Cache property keys to avoid repeated Object.keys() calls
        if (!this._cachedKeys) {
            this._cachedKeys = Object.keys(this.toProperties);
        }
        
        // Update properties using cached keys for better performance
        const keys = this._cachedKeys;
        const target = this.target;
        const fromProps = this.fromProperties;
        const toProps = this.toProperties;
        const reversed = this.reversed;
        
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const from = fromProps[key];
            const to = toProps[key];
            
            if (reversed) {
                target[key] = to + (from - to) * easedProgress;
            } else {
                target[key] = from + (to - from) * easedProgress;
            }
        }
        
        // Call update callback
        if (this.options.onUpdate) {
            this.options.onUpdate(target, easedProgress);
        }
        
        // Check completion
        if (progress >= 1) {
            this.handleCompletion();
        }
    }

    /**
     * Handle tween completion
     * @private
     */
    handleCompletion() {
        if (this.options.yoyo && !this.reversed) {
            this.reversed = true;
            this.time = 0;
            return;
        }
        
        if (this.repeatCount < this.options.repeat) {
            this.repeatCount++;
            this.time = 0;
            this.reversed = false;
            return;
        }
        
        this.completed = true;
        
        if (this.options.onComplete) {
            this.options.onComplete(this.target);
        }
        
        // Start chained tweens or execute functions
        this.chain.forEach(chainedItem => {
            if (typeof chainedItem === 'function') {
                // Execute function immediately
                chainedItem();
            } else if (chainedItem && typeof chainedItem.start === 'function') {
                // Start chained tween
                chainedItem.start();
            }
        });
    }

    /**
     * Apply easing function
     * @param {number} t - Progress (0-1)
     * @returns {number} Eased progress
     * @private
     */
    applyEasing(t) {
        const easingFunctions = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => t * (2 - t),
            easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (--t) * t * t + 1,
            easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => 1 - (--t) * t * t * t,
            easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
            easeInElastic: t => {
                const c4 = (2 * Math.PI) / 3;
                return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
            },
            easeOutElastic: t => {
                const c4 = (2 * Math.PI) / 3;
                return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
            },
            easeInBounce: t => 1 - easingFunctions.easeOutBounce(1 - t),
            easeOutBounce: t => {
                const n1 = 7.5625;
                const d1 = 2.75;
                if (t < 1 / d1) return n1 * t * t;
                else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
                else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
                else return n1 * (t -= 2.625 / d1) * t + 0.984375;
            }
        };
        
        const easingFunc = easingFunctions[this.options.easing] || easingFunctions.linear;
        return easingFunc(t);
    }

    /**
     * Chain another tween to start after this one
     * @param {Tween|Function} tween - Tween to chain or function to call
     * @returns {Tween} This tween for chaining
     */
    chainWith(tween) {
        this.chain.push(tween);
        return this;
    }

    /**
     * Chain a function call after this tween completes
     * @param {Function} func - Function to call
     * @param {...any} args - Arguments to pass to function
     * @returns {Tween} This tween for chaining
     */
    then(func, ...args) {
        this.chain.push(() => func(...args));
        return this;
    }

    /**
     * Chain a delay after this tween
     * @param {number} duration - Delay duration in seconds
     * @returns {Tween} This tween for chaining
     */
    delay(duration) {
        const delayTween = new Tween({}, {}, duration, { 
            onComplete: () => {} // Empty tween just for delay
        });
        this.chain.push(delayTween);
        return this;
    }

    /**
     * Check if tween is complete
     * @returns {boolean} True if complete
     */
    isComplete() {
        return this.completed;
    }

    /**
     * Stop the tween
     */
    stop() {
        this.completed = true;
    }
}

/**
 * Effects manager for game juicing effects like screen shake, flash, etc.
 */
class EffectsManager {
    constructor(game) {
        this.game = game;
        this.effects = [];
        
        // Screen shake
        this.shakeIntensity = 0;
        this.shakeDuration = 0;
        this.shakeOffset = { x: 0, y: 0 };
        
        // Screen flash
        this.flashIntensity = 0;
        this.flashColor = 'white';
        this.flashDuration = 0;
        
        // Zoom punch
        this.zoomPunchIntensity = 0;
        this.zoomPunchDuration = 0;
    }

    /**
     * Add screen shake effect
     * @param {number} intensity - Shake intensity (pixels)
     * @param {number} duration - Duration in seconds
     */
    addScreenShake(intensity, duration) {
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
        this.shakeDuration = Math.max(this.shakeDuration, duration);
    }

    /**
     * Add screen flash effect
     * @param {string} [color='white'] - Flash color
     * @param {number} [intensity=0.5] - Flash intensity (0-1)
     * @param {number} [duration=0.1] - Duration in seconds
     */
    addScreenFlash(color = 'white', intensity = 0.5, duration = 0.1) {
        this.flashColor = color;
        this.flashIntensity = Math.max(this.flashIntensity, intensity);
        this.flashDuration = Math.max(this.flashDuration, duration);
    }

    /**
     * Add zoom punch effect
     * @param {number} [intensity=0.1] - Zoom intensity
     * @param {number} [duration=0.2] - Duration in seconds
     */
    addZoomPunch(intensity = 0.1, duration = 0.2) {
        this.zoomPunchIntensity = Math.max(this.zoomPunchIntensity, intensity);
        this.zoomPunchDuration = Math.max(this.zoomPunchDuration, duration);
    }

    /**
     * Update all effects
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        this.updateScreenShake(deltaTime);
        this.updateScreenFlash(deltaTime);
        this.updateZoomPunch(deltaTime);
        
        // Update custom effects
        for (let i = this.effects.length - 1; i >= 0; i--) {
            const effect = this.effects[i];
            effect.update(deltaTime);
            
            if (effect.isComplete()) {
                this.effects.splice(i, 1);
            }
        }
    }

    /**
     * Update screen shake
     * @param {number} deltaTime - Time since last frame
     * @private
     */
    updateScreenShake(deltaTime) {
        if (this.shakeDuration > 0) {
            // Store original duration for fade calculation
            const originalDuration = this.shakeDuration + deltaTime;
            this.shakeDuration -= deltaTime;
            
            if (this.shakeDuration > 0) {
                // Fade shake intensity over time (from full to zero)
                const fadeMultiplier = this.shakeDuration / Math.max(originalDuration, 0.001);
                const currentIntensity = this.shakeIntensity * fadeMultiplier;
                this.shakeOffset.x = (Math.random() - 0.5) * currentIntensity * 2;
                this.shakeOffset.y = (Math.random() - 0.5) * currentIntensity * 2;
            } else {
                this.shakeOffset.x = 0;
                this.shakeOffset.y = 0;
                this.shakeIntensity = 0;
            }
        }
    }

    /**
     * Update screen flash
     * @param {number} deltaTime - Time since last frame
     * @private
     */
    updateScreenFlash(deltaTime) {
        if (this.flashDuration > 0) {
            this.flashDuration -= deltaTime;
            
            if (this.flashDuration <= 0) {
                this.flashIntensity = 0;
            }
        }
    }

    /**
     * Update zoom punch
     * @param {number} deltaTime - Time since last frame
     * @private
     */
    updateZoomPunch(deltaTime) {
        if (this.zoomPunchDuration > 0) {
            this.zoomPunchDuration -= deltaTime;
            
            if (this.zoomPunchDuration <= 0) {
                this.zoomPunchIntensity = 0;
            }
        }
    }

    /**
     * Apply effects to renderer
     * @param {Renderer} renderer - Renderer instance
     */
    applyEffects(renderer) {
        // Apply screen shake
        if (this.shakeIntensity > 0) {
            renderer.ctx.translate(this.shakeOffset.x, this.shakeOffset.y);
        }
        
        // Apply zoom punch
        if (this.zoomPunchIntensity > 0) {
            const scale = 1 + this.zoomPunchIntensity;
            renderer.ctx.scale(scale, scale);
        }
    }
    
    /**
     * Apply post-render effects (like screen flash)
     * @param {Renderer} renderer - Renderer instance
     */
    applyPostEffects(renderer) {
        // Apply screen flash
        if (this.flashIntensity > 0) {
            renderer.ctx.save();
            renderer.ctx.globalCompositeOperation = 'screen';
            renderer.ctx.globalAlpha = this.flashIntensity;
            renderer.ctx.fillStyle = this.flashColor;
            renderer.ctx.fillRect(0, 0, renderer.canvas.width, renderer.canvas.height);
            renderer.ctx.restore();
        }
    }

    /**
     * Render effects overlay
     * @param {Renderer} renderer - Renderer instance
     */
    renderOverlay(renderer) {
        // Render screen flash
        if (this.flashIntensity > 0) {
            renderer.ctx.save();
            renderer.ctx.globalAlpha = this.flashIntensity;
            renderer.ctx.fillStyle = this.flashColor;
            renderer.ctx.fillRect(0, 0, renderer.canvas.width, renderer.canvas.height);
            renderer.ctx.restore();
        }
    }

    /**
     * Add a custom effect
     * @param {Effect} effect - Effect instance
     */
    addEffect(effect) {
        this.effects.push(effect);
    }

    /**
     * Clear all effects
     */
    clear() {
        this.effects.length = 0;
        this.shakeIntensity = 0;
        this.shakeDuration = 0;
        this.flashIntensity = 0;
        this.flashDuration = 0;
        this.zoomPunchIntensity = 0;
        this.zoomPunchDuration = 0;
    }
}

/**
 * Time management system for controlling game speed and time effects
 */
class TimeManager {
    constructor(game) {
        this.game = game;
        this.globalTimeScale = 1.0;
        this.timeEffects = [];
    }

    /**
     * Set global time scale
     * @param {number} scale - Time scale (1.0 = normal, 0.5 = half speed, 2.0 = double speed)
     */
    setTimeScale(scale) {
        this.globalTimeScale = Math.max(0, scale);
    }

    /**
     * Get current time scale
     * @returns {number} Current time scale
     */
    getTimeScale() {
        return this.globalTimeScale;
    }

    /**
     * Add temporary time effect
     * @param {number} scale - Time scale for the effect
     * @param {number} duration - Duration in seconds
     * @param {Function} [onComplete] - Callback when effect ends
     */
    addTimeEffect(scale, duration, onComplete = null) {
        const effect = {
            scale,
            duration,
            originalDuration: duration,
            onComplete
        };
        this.timeEffects.push(effect);
    }

    /**
     * Create slow motion effect
     * @param {number} [scale=0.3] - Slow motion scale
     * @param {number} [duration=2] - Duration in seconds
     */
    slowMotion(scale = 0.3, duration = 2) {
        this.addTimeEffect(scale, duration);
    }

    /**
     * Create bullet time effect with gradual transition
     * @param {number} [targetScale=0.1] - Target time scale
     * @param {number} [duration=3] - Effect duration
     * @param {number} [transitionTime=0.5] - Transition in/out time
     */
    bulletTime(targetScale = 0.1, duration = 3, transitionTime = 0.5) {
        const tween = this.game.tweenManager;
        
        // Transition to slow motion
        tween.to(this, { globalTimeScale: targetScale }, transitionTime, {
            easing: 'easeOutQuad',
            onComplete: () => {
                // Hold slow motion
                setTimeout(() => {
                    // Transition back to normal
                    tween.to(this, { globalTimeScale: 1.0 }, transitionTime, {
                        easing: 'easeInQuad'
                    });
                }, (duration - transitionTime * 2) * 1000);
            }
        });
    }

    /**
     * Update time effects
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        for (let i = this.timeEffects.length - 1; i >= 0; i--) {
            const effect = this.timeEffects[i];
            effect.duration -= deltaTime;
            
            if (effect.duration <= 0) {
                if (effect.onComplete) {
                    effect.onComplete();
                }
                this.timeEffects.splice(i, 1);
            }
        }
    }

    /**
     * Apply time scale to delta time
     * @param {number} deltaTime - Original delta time
     * @returns {number} Scaled delta time
     */
    applyTimeScale(deltaTime) {
        let finalScale = this.globalTimeScale;
        
        // Apply temporary time effects
        this.timeEffects.forEach(effect => {
            finalScale *= effect.scale;
        });
        
        return deltaTime * finalScale;
    }

    /**
     * Apply time scale to a specific object
     * @param {Object} object - Object with time-based properties
     * @param {number} deltaTime - Delta time to scale
     * @returns {number} Scaled delta time for the object
     */
    applyObjectTimeScale(object, deltaTime) {
        const objectScale = object.timeScale || 1.0;
        return this.applyTimeScale(deltaTime) * objectScale;
    }

    /**
     * Pause time (set scale to 0)
     */
    pause() {
        this.setTimeScale(0);
    }

    /**
     * Resume normal time
     */
    resume() {
        this.setTimeScale(1);
    }

    /**
     * Check if time is paused
     * @returns {boolean} True if paused
     */
    isPaused() {
        return this.globalTimeScale === 0;
    }
}

/**
 * Input management system for handling mouse, touch, and keyboard events
 * Provides proper coordinate translation and unified input handling
 */
class InputManager {
    constructor(game) {
        this.game = game;
        
        // Mouse/Touch state
        this.mouse = {
            x: 0,
            y: 0,
            canvasX: 0,
            canvasY: 0,
            isDown: false,
            justPressed: false,
            justReleased: false,
            button: -1
        };
        
        // Touch state
        this.touches = [];
        this.touchSupported = 'ontouchstart' in window;
        
        // Keyboard state
        this.keys = new Map();
        this.keysJustPressed = new Set();
        this.keysJustReleased = new Set();
        
        // Event callbacks
        this.onPointerDown = null;
        this.onPointerMove = null;
        this.onPointerUp = null;
        this.onKeyDown = null;
        this.onKeyUp = null;
        
        this._setupEventListeners();
    }

    /**
     * Setup all input event listeners
     * @private
     */
    _setupEventListeners() {
        const canvas = this.game.canvas;
        
        // Mouse events
        canvas.addEventListener('mousedown', (e) => this._handlePointerDown(e));
        canvas.addEventListener('mousemove', (e) => this._handlePointerMove(e));
        canvas.addEventListener('mouseup', (e) => this._handlePointerUp(e));
        canvas.addEventListener('mouseleave', (e) => this._handlePointerUp(e));
        
        // Touch events (with passive for better performance)
        if (this.touchSupported) {
            canvas.addEventListener('touchstart', (e) => this._handleTouchStart(e), { passive: false });
            canvas.addEventListener('touchmove', (e) => this._handleTouchMove(e), { passive: false });
            canvas.addEventListener('touchend', (e) => this._handleTouchEnd(e), { passive: false });
            canvas.addEventListener('touchcancel', (e) => this._handleTouchEnd(e), { passive: false });
        }
        
        // Keyboard events (on window for global capture)
        window.addEventListener('keydown', (e) => this._handleKeyDown(e));
        window.addEventListener('keyup', (e) => this._handleKeyUp(e));
        
        // Prevent context menu on canvas
        canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    /**
     * Convert screen coordinates to canvas coordinates
     * @param {number} clientX - Screen X coordinate
     * @param {number} clientY - Screen Y coordinate
     * @returns {{x: number, y: number}} Canvas coordinates
     */
    screenToCanvas(clientX, clientY) {
        const rect = this.game.canvas.getBoundingClientRect();
        const scaleX = this.game.canvas.width / rect.width;
        const scaleY = this.game.canvas.height / rect.height;
        
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    /**
     * Handle pointer down events (mouse/touch)
     * @param {Event} e - Event object
     * @private
     */
    _handlePointerDown(e) {
        e.preventDefault();
        
        const canvasCoords = this.screenToCanvas(e.clientX, e.clientY);
        
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.canvasX = canvasCoords.x;
        this.mouse.canvasY = canvasCoords.y;
        this.mouse.isDown = true;
        this.mouse.justPressed = true;
        this.mouse.button = e.button;
        
        if (this.onPointerDown) {
            this.onPointerDown(canvasCoords.x, canvasCoords.y, e.button);
        }
    }

    /**
     * Handle pointer move events
     * @param {Event} e - Event object
     * @private
     */
    _handlePointerMove(e) {
        const canvasCoords = this.screenToCanvas(e.clientX, e.clientY);
        
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.canvasX = canvasCoords.x;
        this.mouse.canvasY = canvasCoords.y;
        
        if (this.onPointerMove) {
            this.onPointerMove(canvasCoords.x, canvasCoords.y, this.mouse.isDown);
        }
    }

    /**
     * Handle pointer up events
     * @param {Event} e - Event object
     * @private
     */
    _handlePointerUp(e) {
        const canvasCoords = this.screenToCanvas(e.clientX, e.clientY);
        
        this.mouse.isDown = false;
        this.mouse.justReleased = true;
        this.mouse.button = -1;
        
        if (this.onPointerUp) {
            this.onPointerUp(canvasCoords.x, canvasCoords.y);
        }
    }

    /**
     * Handle touch start events
     * @param {TouchEvent} e - Touch event
     * @private
     */
    _handleTouchStart(e) {
        e.preventDefault();
        
        const touch = e.changedTouches[0];
        const canvasCoords = this.screenToCanvas(touch.clientX, touch.clientY);
        
        // Treat first touch as mouse for compatibility
        this.mouse.x = touch.clientX;
        this.mouse.y = touch.clientY;
        this.mouse.canvasX = canvasCoords.x;
        this.mouse.canvasY = canvasCoords.y;
        this.mouse.isDown = true;
        this.mouse.justPressed = true;
        
        // Store touch info
        this.touches = Array.from(e.touches).map(t => {
            const coords = this.screenToCanvas(t.clientX, t.clientY);
            return {
                id: t.identifier,
                x: coords.x,
                y: coords.y,
                clientX: t.clientX,
                clientY: t.clientY
            };
        });
        
        if (this.onPointerDown) {
            this.onPointerDown(canvasCoords.x, canvasCoords.y, 0);
        }
    }

    /**
     * Handle touch move events
     * @param {TouchEvent} e - Touch event
     * @private
     */
    _handleTouchMove(e) {
        e.preventDefault();
        
        const touch = e.touches[0];
        if (touch) {
            const canvasCoords = this.screenToCanvas(touch.clientX, touch.clientY);
            
            this.mouse.x = touch.clientX;
            this.mouse.y = touch.clientY;
            this.mouse.canvasX = canvasCoords.x;
            this.mouse.canvasY = canvasCoords.y;
            
            if (this.onPointerMove) {
                this.onPointerMove(canvasCoords.x, canvasCoords.y, true);
            }
        }
        
        // Update touch positions
        this.touches = Array.from(e.touches).map(t => {
            const coords = this.screenToCanvas(t.clientX, t.clientY);
            return {
                id: t.identifier,
                x: coords.x,
                y: coords.y,
                clientX: t.clientX,
                clientY: t.clientY
            };
        });
    }

    /**
     * Handle touch end events
     * @param {TouchEvent} e - Touch event
     * @private
     */
    _handleTouchEnd(e) {
        e.preventDefault();
        
        if (e.touches.length === 0) {
            this.mouse.isDown = false;
            this.mouse.justReleased = true;
            
            if (this.onPointerUp) {
                this.onPointerUp(this.mouse.canvasX, this.mouse.canvasY);
            }
        }
        
        // Update remaining touches
        this.touches = Array.from(e.touches).map(t => {
            const coords = this.screenToCanvas(t.clientX, t.clientY);
            return {
                id: t.identifier,
                x: coords.x,
                y: coords.y,
                clientX: t.clientX,
                clientY: t.clientY
            };
        });
    }

    /**
     * Handle key down events
     * @param {KeyboardEvent} e - Keyboard event
     * @private
     */
    _handleKeyDown(e) {
        if (!this.keys.get(e.code)) {
            this.keysJustPressed.add(e.code);
        }
        this.keys.set(e.code, true);
        
        if (this.onKeyDown) {
            this.onKeyDown(e.code, e.key);
        }
    }

    /**
     * Handle key up events
     * @param {KeyboardEvent} e - Keyboard event
     * @private
     */
    _handleKeyUp(e) {
        this.keys.set(e.code, false);
        this.keysJustReleased.add(e.code);
        
        if (this.onKeyUp) {
            this.onKeyUp(e.code, e.key);
        }
    }

    /**
     * Update input state (call once per frame)
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        // Clear just pressed/released flags
        this.mouse.justPressed = false;
        this.mouse.justReleased = false;
        this.keysJustPressed.clear();
        this.keysJustReleased.clear();
    }

    /**
     * Check if a key is currently pressed
     * @param {string} keyCode - Key code to check
     * @returns {boolean} True if key is pressed
     */
    isKeyDown(keyCode) {
        return this.keys.get(keyCode) || false;
    }

    /**
     * Check if a key was just pressed this frame
     * @param {string} keyCode - Key code to check
     * @returns {boolean} True if key was just pressed
     */
    isKeyJustPressed(keyCode) {
        return this.keysJustPressed.has(keyCode);
    }

    /**
     * Check if a key was just released this frame
     * @param {string} keyCode - Key code to check
     * @returns {boolean} True if key was just released
     */
    isKeyJustReleased(keyCode) {
        return this.keysJustReleased.has(keyCode);
    }

    /**
     * Get current mouse/touch position in canvas coordinates
     * @returns {{x: number, y: number}} Canvas coordinates
     */
    getPointerPosition() {
        return {
            x: this.mouse.canvasX,
            y: this.mouse.canvasY
        };
    }

    /**
     * Check if pointer is currently down
     * @returns {boolean} True if pointer is down
     */
    isPointerDown() {
        return this.mouse.isDown;
    }

    /**
     * Check if pointer was just pressed this frame
     * @returns {boolean} True if pointer was just pressed
     */
    isPointerJustPressed() {
        return this.mouse.justPressed;
    }

    /**
     * Check if pointer was just released this frame
     * @returns {boolean} True if pointer was just released
     */
    isPointerJustReleased() {
        return this.mouse.justReleased;
    }

    /**
     * Get all current touch points
     * @returns {Array} Array of touch objects with x, y, id properties
     */
    getTouches() {
        return [...this.touches];
    }
}

/**
 * Game object base class with common properties and behaviors
 * All game entities should extend this class
 */
class GameObject {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.alpha = 1;
        this.visible = true;
        this.active = true;
        this.timeScale = 1;
        
        // Physics
        this.vx = 0;
        this.vy = 0;
        this.acceleration = { x: 0, y: 0 };
        this.friction = 0;
        this.bounce = 0;
        
        // Collision
        this.collisionEnabled = false;
        this.collisionBounds = null;
        
        // Lifecycle
        this.created = false;
        this.destroyed = false;
        
        // Component system
        this.components = new Map();
    }

    /**
     * Initialize the game object
     */
    create() {
        this.created = true;
    }

    /**
     * Update the game object
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        if (!this.active) return;
        
        // Apply time scale
        const scaledDelta = deltaTime * this.timeScale;
        
        // Update physics
        this.vx += this.acceleration.x * scaledDelta;
        this.vy += this.acceleration.y * scaledDelta;
        
        // Apply friction
        if (this.friction > 0) {
            this.vx *= Math.pow(1 - this.friction, scaledDelta);
            this.vy *= Math.pow(1 - this.friction, scaledDelta);
        }
        
        // Update position
        this.x += this.vx * scaledDelta;
        this.y += this.vy * scaledDelta;
        
        // Update components
        this.components.forEach(component => {
            if (component.update) {
                component.update(scaledDelta);
            }
        });
    }

    /**
     * Render the game object
     * @param {Renderer} renderer - Renderer instance
     */
    render(renderer) {
        if (!this.visible) return;
        
        // Render components
        this.components.forEach(component => {
            if (component.render) {
                component.render(renderer);
            }
        });
    }

    /**
     * Destroy the game object
     */
    destroy() {
        this.destroyed = true;
        this.active = false;
        this.visible = false;
        
        // Destroy components
        this.components.forEach(component => {
            if (component.destroy) {
                component.destroy();
            }
        });
        
        this.components.clear();
    }

    /**
     * Add a component to this game object
     * @param {string} name - Component name
     * @param {Object} component - Component instance
     */
    addComponent(name, component) {
        component.gameObject = this;
        this.components.set(name, component);
        
        if (component.create) {
            component.create();
        }
    }

    /**
     * Get a component by name
     * @param {string} name - Component name
     * @returns {Object|null} Component or null
     */
    getComponent(name) {
        return this.components.get(name) || null;
    }

    /**
     * Remove a component
     * @param {string} name - Component name
     */
    removeComponent(name) {
        const component = this.components.get(name);
        if (component && component.destroy) {
            component.destroy();
        }
        this.components.delete(name);
    }

    /**
     * Get bounding box for collision detection
     * @returns {Object} Bounding box {x, y, width, height}
     */
    getBounds() {
        return {
            x: this.x - this.width / 2,
            y: this.y - this.height / 2,
            width: this.width,
            height: this.height
        };
    }

    /**
     * Check collision with another game object
     * @param {GameObject} other - Other game object
     * @returns {boolean} True if colliding
     */
    collidesWith(other) {
        if (!this.collisionEnabled || !other.collisionEnabled) return false;
        
        const bounds1 = this.getBounds();
        const bounds2 = other.getBounds();
        
        return bounds1.x < bounds2.x + bounds2.width &&
               bounds1.x + bounds1.width > bounds2.x &&
               bounds1.y < bounds2.y + bounds2.height &&
               bounds1.y + bounds1.height > bounds2.y;
    }

    /**
     * Set position
     * @param {number} x - X position
     * @param {number} y - Y position
     */
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Move by offset
     * @param {number} dx - X offset
     * @param {number} dy - Y offset
     */
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    /**
     * Set scale
     * @param {number} scaleX - X scale
     * @param {number} scaleY - Y scale (optional, defaults to scaleX)
     */
    setScale(scaleX, scaleY = scaleX) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }

    /**
     * Set velocity
     * @param {number} vx - X velocity
     * @param {number} vy - Y velocity
     */
    setVelocity(vx, vy) {
        this.vx = vx;
        this.vy = vy;
    }
}

/**
 * Tile map system for efficient rendering of large worlds
 * Supports multiple layers and tile animations
 */
class TileMap {
    constructor(config) {
        this.width = config.width || 0;
        this.height = config.height || 0;
        this.tileWidth = config.tileWidth || 32;
        this.tileHeight = config.tileHeight || 32;
        this.tileset = config.tileset || null;
        this.layers = config.layers || [];
        
        // Culling for performance
        this.cullPadding = 1;
        
        // Animation support
        this.animatedTiles = new Map();
        this.animationTime = 0;
    }

    /**
     * Add a layer to the tilemap
     * @param {Array<Array<number>>} data - 2D array of tile IDs
     * @param {Object} [options={}] - Layer options
     */
    addLayer(data, options = {}) {
        const layer = {
            data,
            visible: options.visible !== false,
            alpha: options.alpha || 1,
            parallaxX: options.parallaxX || 1,
            parallaxY: options.parallaxY || 1,
            offsetX: options.offsetX || 0,
            offsetY: options.offsetY || 0
        };
        
        this.layers.push(layer);
    }

    /**
     * Get tile at world coordinates
     * @param {number} x - World X coordinate
     * @param {number} y - World Y coordinate
     * @param {number} [layerIndex=0] - Layer index
     * @returns {number} Tile ID
     */
    getTileAt(x, y, layerIndex = 0) {
        const tileX = Math.floor(x / this.tileWidth);
        const tileY = Math.floor(y / this.tileHeight);
        return this.getTile(tileX, tileY, layerIndex);
    }

    /**
     * Get tile at tile coordinates
     * @param {number} tileX - Tile X coordinate
     * @param {number} tileY - Tile Y coordinate
     * @param {number} [layerIndex=0] - Layer index
     * @returns {number} Tile ID
     */
    getTile(tileX, tileY, layerIndex = 0) {
        if (layerIndex < 0 || layerIndex >= this.layers.length) return 0;
        
        const layer = this.layers[layerIndex];
        if (tileY < 0 || tileY >= layer.data.length) return 0;
        if (tileX < 0 || tileX >= layer.data[tileY].length) return 0;
        
        return layer.data[tileY][tileX];
    }

    /**
     * Set tile at tile coordinates
     * @param {number} tileX - Tile X coordinate
     * @param {number} tileY - Tile Y coordinate
     * @param {number} tileId - Tile ID to set
     * @param {number} [layerIndex=0] - Layer index
     */
    setTile(tileX, tileY, tileId, layerIndex = 0) {
        if (layerIndex < 0 || layerIndex >= this.layers.length) return;
        
        const layer = this.layers[layerIndex];
        if (tileY < 0 || tileY >= layer.data.length) return;
        if (tileX < 0 || tileX >= layer.data[tileY].length) return;
        
        layer.data[tileY][tileX] = tileId;
    }

    /**
     * Update tilemap animations
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        this.animationTime += deltaTime;
        
        // Update animated tiles
        this.animatedTiles.forEach((animation, tileId) => {
            const frameTime = this.animationTime / animation.duration;
            animation.currentFrame = Math.floor(frameTime * animation.frames.length) % animation.frames.length;
        });
    }

    /**
     * Render the tilemap with culling
     * @param {Renderer} renderer - Renderer instance
     * @param {Object} camera - Camera object with x, y properties
     */
    render(renderer, camera = { x: 0, y: 0 }) {
        if (!this.tileset) return;
        
        const viewWidth = renderer.canvas.width;
        const viewHeight = renderer.canvas.height;
        
        // Calculate visible tile range
        const startTileX = Math.max(0, Math.floor((camera.x - this.cullPadding * this.tileWidth) / this.tileWidth));
        const endTileX = Math.min(this.width, Math.ceil((camera.x + viewWidth + this.cullPadding * this.tileWidth) / this.tileWidth));
        const startTileY = Math.max(0, Math.floor((camera.y - this.cullPadding * this.tileHeight) / this.tileHeight));
        const endTileY = Math.min(this.height, Math.ceil((camera.y + viewHeight + this.cullPadding * this.tileHeight) / this.tileHeight));
        
        // Render each layer
        this.layers.forEach((layer, layerIndex) => {
            if (!layer.visible) return;
            
            renderer.ctx.save();
            renderer.ctx.globalAlpha = layer.alpha;
            
            // Apply parallax
            const parallaxOffsetX = camera.x * (1 - layer.parallaxX);
            const parallaxOffsetY = camera.y * (1 - layer.parallaxY);
            
            for (let tileY = startTileY; tileY < endTileY; tileY++) {
                for (let tileX = startTileX; tileX < endTileX; tileX++) {
                    const tileId = this.getTile(tileX, tileY, layerIndex);
                    if (tileId === 0) continue;
                    
                    const worldX = tileX * this.tileWidth + layer.offsetX + parallaxOffsetX;
                    const worldY = tileY * this.tileHeight + layer.offsetY + parallaxOffsetY;
                    
                    this.renderTile(renderer, tileId, worldX, worldY);
                }
            }
            
            renderer.ctx.restore();
        });
    }

    /**
     * Render a single tile
     * @param {Renderer} renderer - Renderer instance
     * @param {number} tileId - Tile ID to render
     * @param {number} x - World X position
     * @param {number} y - World Y position
     * @private
     */
    renderTile(renderer, tileId, x, y) {
        if (!this.tileset || tileId === 0) return;
        
        // Handle animated tiles
        let actualTileId = tileId;
        if (this.animatedTiles.has(tileId)) {
            const animation = this.animatedTiles.get(tileId);
            actualTileId = animation.frames[animation.currentFrame];
        }
        
        // Calculate tile position in tileset
        const tilesPerRow = Math.floor(this.tileset.width / this.tileWidth);
        const tileIndex = actualTileId - 1; // Assuming tile IDs start at 1
        const sourceX = (tileIndex % tilesPerRow) * this.tileWidth;
        const sourceY = Math.floor(tileIndex / tilesPerRow) * this.tileHeight;
        
        renderer.ctx.drawImage(
            this.tileset,
            sourceX, sourceY, this.tileWidth, this.tileHeight,
            x, y, this.tileWidth, this.tileHeight
        );
    }

    /**
     * Add animated tile
     * @param {number} tileId - Base tile ID
     * @param {Array<number>} frames - Array of frame tile IDs
     * @param {number} duration - Animation duration in seconds
     */
    addAnimatedTile(tileId, frames, duration) {
        this.animatedTiles.set(tileId, {
            frames,
            duration,
            currentFrame: 0
        });
    }

    /**
     * Get world bounds of the tilemap
     * @returns {Object} Bounds {x, y, width, height}
     */
    getBounds() {
        return {
            x: 0,
            y: 0,
            width: this.width * this.tileWidth,
            height: this.height * this.tileHeight
        };
    }
}

/**
 * UIManager - Legacy canvas-based UI system
 * 
 * ⚠️ LLM OPTIMIZATION NOTICE: USE HTML/CSS/JQUERY INSTEAD!
 * 
 * This UIManager exists for backward compatibility and specific canvas-integrated
 * UI needs, but for optimal LLM code generation, use HTML/CSS/jQuery for UI:
 * 
 * 🚫 AVOID Canvas UI (complex for LLMs to generate):
 * ```javascript
 * const button = new UIButton(100, 100, 200, 50, 'Start Game');
 * game.uiManager.addElement(button);
 * ```
 * 
 * ✅ PREFER HTML/jQuery UI (LLM-friendly):
 * ```javascript
 * $('body').append('<button id="startBtn" class="game-button">Start Game</button>');
 * $('#startBtn').click(() => game.start());
 * ```
 * 
 * 📋 WHEN TO USE CANVAS UI:
 * - Health bars that follow sprites in game world
 * - Tooltips that need to render over game objects  
 * - UI elements that transform with camera movement
 * - Pixel-perfect retro game interfaces
 * 
 * 📋 WHEN TO USE HTML/JQUERY UI (recommended):
 * - Main menus and navigation
 * - Settings and options panels
 * - Inventory and shop interfaces
 * - Chat and messaging systems
 * - HUD elements like health bars, mini-maps
 * - Modal dialogs and notifications
 * - Form inputs and controls
 * 
 * The HTML UI automatically overlays the canvas and can trigger canvas effects.
 */
class UIManager {
    constructor(game) {
        this.game = game;
        this.elements = [];
        this.focusedElement = null;
        this.hoveredElement = null;
        
        // Theme/styling
        this.theme = {
            buttonColor: '#4a90e2',
            buttonHoverColor: '#357abd',
            buttonPressedColor: '#2c5d87',
            buttonTextColor: '#ffffff',
            panelColor: '#2c3e50',
            panelBorderColor: '#34495e',
            textColor: '#ecf0f1',
            backgroundColor: '#1a252f',
            borderRadius: 4,
            padding: 8,
            fontSize: 14,
            fontFamily: 'Arial, sans-serif'
        };
        
        this.setupInputHandlers();
    }
    
    setupInputHandlers() {
        // Store original handlers to chain them
        const originalPointerDown = this.game.input.onPointerDown;
        const originalPointerUp = this.game.input.onPointerUp;
        const originalPointerMove = this.game.input.onPointerMove;
        
        // Chain UI input handling with existing handlers
        this.game.input.onPointerDown = (x, y, button) => {
            const uiHandled = this.handlePointerDown(x, y, button);
            
            // Only call original handler if UI didn't handle the event
            if (!uiHandled && originalPointerDown) {
                originalPointerDown(x, y, button);
            }
        };
        
        this.game.input.onPointerUp = (x, y, button) => {
            const uiHandled = this.handlePointerUp(x, y, button);
            
            if (!uiHandled && originalPointerUp) {
                originalPointerUp(x, y, button);
            }
        };
        
        this.game.input.onPointerMove = (x, y, isDown) => {
            const uiHandled = this.handlePointerMove(x, y, isDown);
            
            if (!uiHandled && originalPointerMove) {
                originalPointerMove(x, y, isDown);
            }
        };
        
        console.log('UI input handlers setup complete');
    }
    
    handlePointerDown(x, y, button) {
        const element = this.getElementAt(x, y);
        console.log('UI handlePointerDown:', x, y, button, element ? element.type : 'none');
        
        if (element && element.interactive) {
            this.focusedElement = element;
            element.onPointerDown && element.onPointerDown(x, y, button);
            
            if (element.type === 'button') {
                element.isPressed = true;
            }
            return true; // UI handled the event
        } else {
            this.focusedElement = null;
            return false; // UI did not handle the event
        }
    }
    
    handlePointerUp(x, y, button) {
        const element = this.getElementAt(x, y);
        let handled = false;
        
        if (element && element.interactive) {
            element.onPointerUp && element.onPointerUp(x, y, button);
            
            if (element.type === 'button') {
                element.isPressed = false;
                if (element === this.focusedElement) {
                    element.onClick && element.onClick();
                }
            }
            handled = true;
        }
        
        // Reset pressed states for all buttons
        this.elements.forEach(el => {
            if (el.type === 'button') {
                el.isPressed = false;
            }
        });
        
        return handled;
    }
    
    handlePointerMove(x, y, isDown) {
        const element = this.getElementAt(x, y);
        let handled = false;
        
        // Handle hover states
        if (element !== this.hoveredElement) {
            if (this.hoveredElement) {
                this.hoveredElement.isHovered = false;
                this.hoveredElement.onPointerLeave && this.hoveredElement.onPointerLeave();
            }
            
            this.hoveredElement = element;
            
            if (element && element.interactive) {
                element.isHovered = true;
                element.onPointerEnter && element.onPointerEnter();
            }
        }
        
        if (element && element.interactive) {
            element.onPointerMove && element.onPointerMove(x, y, isDown);
            handled = true;
        }
        
        return handled;
    }
    
    getElementAt(x, y) {
        // Check elements in reverse order (top to bottom)
        for (let i = this.elements.length - 1; i >= 0; i--) {
            const element = this.elements[i];
            if (element.visible && element.containsPoint(x, y)) {
                return element;
            }
        }
        return null;
    }
    
    addElement(element) {
        element.uiManager = this;
        this.elements.push(element);
        return element;
    }
    
    removeElement(element) {
        const index = this.elements.indexOf(element);
        if (index > -1) {
            this.elements.splice(index, 1);
            
            if (this.focusedElement === element) {
                this.focusedElement = null;
            }
            if (this.hoveredElement === element) {
                this.hoveredElement = null;
            }
        }
    }
    
    clear() {
        this.elements.length = 0;
        this.focusedElement = null;
        this.hoveredElement = null;
    }
    
    update(deltaTime) {
        this.elements.forEach(element => {
            if (element.update) {
                element.update(deltaTime);
            }
        });
    }
    
    render(renderer) {
        this.elements.forEach(element => {
            if (element.visible) {
                element.render(renderer);
            }
        });
    }
}

/**
 * Base class for all UI elements
 */
class UIElement {
    constructor(x = 0, y = 0, width = 100, height = 30) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = true;
        this.interactive = true;
        this.isHovered = false;
        this.type = 'element';
        
        // Parent-child hierarchy
        this.parent = null;
        this.children = [];
        
        // Relative positioning
        this.relativeX = x;
        this.relativeY = y;
        
        // Clipping for containers
        this.clipChildren = false;
        
        // Styling
        this.style = {};
        
        // Event callbacks
        this.onPointerDown = null;
        this.onPointerUp = null;
        this.onPointerMove = null;
        this.onPointerEnter = null;
        this.onPointerLeave = null;
    }
    
    addChild(child) {
        child.parent = this;
        this.children.push(child);
        if (this.uiManager) {
            this.uiManager.addElement(child);
        }
    }
    
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            child.parent = null;
            if (this.uiManager) {
                this.uiManager.removeElement(child);
            }
        }
    }
    
    getAbsoluteX() {
        return this.parent ? this.parent.getAbsoluteX() + this.relativeX : this.x;
    }
    
    getAbsoluteY() {
        return this.parent ? this.parent.getAbsoluteY() + this.relativeY : this.y;
    }
    
    updatePosition() {
        this.x = this.getAbsoluteX();
        this.y = this.getAbsoluteY();
        
        // Update children
        this.children.forEach(child => child.updatePosition());
    }
    
    containsPoint(x, y) {
        const absX = this.getAbsoluteX();
        const absY = this.getAbsoluteY();
        return x >= absX && x <= absX + this.width &&
               y >= absY && y <= absY + this.height;
    }
    
    update(deltaTime) {
        // Update children
        this.children.forEach(child => {
            if (child.update) {
                child.update(deltaTime);
            }
        });
    }
    
    render(renderer) {
        if (!this.visible) return;
        
        // Update absolute position
        this.updatePosition();
        
        // Set up clipping if needed
        if (this.clipChildren && this.children.length > 0) {
            renderer.ctx.save();
            renderer.ctx.beginPath();
            renderer.ctx.rect(this.x, this.y, this.width, this.height);
            renderer.ctx.clip();
        }
        
        // Render children
        this.children.forEach(child => {
            if (child.visible && child.render) {
                child.render(renderer);
            }
        });
        
        // Restore clipping
        if (this.clipChildren && this.children.length > 0) {
            renderer.ctx.restore();
        }
    }
}

/**
 * UI Button element
 */
class UIButton extends UIElement {
    constructor(x, y, width, height, text = 'Button') {
        super(x, y, width, height);
        this.type = 'button';
        this.text = text;
        this.isPressed = false;
        this.onClick = null;
        
        // Button-specific styling
        this.style = {
            backgroundColor: null, // Will use theme default
            hoverColor: null,
            pressedColor: null,
            textColor: null,
            borderRadius: null,
            fontSize: null,
            fontFamily: null
        };
    }
    
    render(renderer) {
        const theme = this.uiManager.theme;
        
        // Determine colors based on state
        let bgColor = this.style.backgroundColor || theme.buttonColor;
        if (this.isPressed) {
            bgColor = this.style.pressedColor || theme.buttonPressedColor;
        } else if (this.isHovered) {
            bgColor = this.style.hoverColor || theme.buttonHoverColor;
        }
        
        const textColor = this.style.textColor || theme.buttonTextColor;
        const borderRadius = this.style.borderRadius || theme.borderRadius;
        const fontSize = this.style.fontSize || theme.fontSize;
        const fontFamily = this.style.fontFamily || theme.fontFamily;
        
        // Draw button background
        renderer.ctx.save();
        renderer.ctx.fillStyle = bgColor;
        
        if (borderRadius > 0) {
            // Rounded rectangle
            renderer.ctx.beginPath();
            renderer.ctx.roundRect(this.x, this.y, this.width, this.height, borderRadius);
            renderer.ctx.fill();
        } else {
            renderer.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
        // Draw button text
        renderer.ctx.fillStyle = textColor;
        renderer.ctx.font = `${fontSize}px ${fontFamily}`;
        renderer.ctx.textAlign = 'center';
        renderer.ctx.textBaseline = 'middle';
        
        const textX = this.x + this.width / 2;
        const textY = this.y + this.height / 2;
        renderer.ctx.fillText(this.text, textX, textY);
        
        renderer.ctx.restore();
    }
}

/**
 * UI Panel element (container/background)
 */
class UIPanel extends UIElement {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.type = 'panel';
        this.interactive = false; // Panels are usually non-interactive backgrounds
        
        this.style = {
            backgroundColor: null,
            borderColor: null,
            borderWidth: 1,
            borderRadius: null
        };
    }
    
    render(renderer) {
        const theme = this.uiManager.theme;
        const bgColor = this.style.backgroundColor || theme.panelColor;
        const borderColor = this.style.borderColor || theme.panelBorderColor;
        const borderWidth = this.style.borderWidth;
        const borderRadius = this.style.borderRadius || theme.borderRadius;
        
        renderer.ctx.save();
        
        // Draw panel background
        renderer.ctx.fillStyle = bgColor;
        
        if (borderRadius > 0) {
            renderer.ctx.beginPath();
            renderer.ctx.roundRect(this.x, this.y, this.width, this.height, borderRadius);
            renderer.ctx.fill();
            
            if (borderWidth > 0) {
                renderer.ctx.strokeStyle = borderColor;
                renderer.ctx.lineWidth = borderWidth;
                renderer.ctx.stroke();
            }
        } else {
            renderer.ctx.fillRect(this.x, this.y, this.width, this.height);
            
            if (borderWidth > 0) {
                renderer.ctx.strokeStyle = borderColor;
                renderer.ctx.lineWidth = borderWidth;
                renderer.ctx.strokeRect(this.x, this.y, this.width, this.height);
            }
        }
        
        renderer.ctx.restore();
    }
}

/**
 * UI Text element
 */
class UIText extends UIElement {
    constructor(x, y, text = 'Text', align = 'left') {
        super(x, y, 0, 0); // Text size will be calculated
        this.type = 'text';
        this.text = text;
        this.align = align; // 'left', 'center', 'right'
        this.interactive = false;
        
        this.style = {
            color: null,
            fontSize: null,
            fontFamily: null,
            lineHeight: 1.2
        };
        
        this.updateSize();
    }
    
    updateSize() {
        // This would ideally measure text, but for simplicity we'll estimate
        const fontSize = this.style.fontSize || this.uiManager?.theme.fontSize || 14;
        this.height = fontSize * this.style.lineHeight;
        this.width = this.text.length * fontSize * 0.6; // Rough estimate
    }
    
    render(renderer) {
        const theme = this.uiManager.theme;
        const color = this.style.color || theme.textColor;
        const fontSize = this.style.fontSize || theme.fontSize;
        const fontFamily = this.style.fontFamily || theme.fontFamily;
        
        renderer.ctx.save();
        renderer.ctx.fillStyle = color;
        renderer.ctx.font = `${fontSize}px ${fontFamily}`;
        renderer.ctx.textAlign = this.align;
        renderer.ctx.textBaseline = 'top';
        
        renderer.ctx.fillText(this.text, this.x, this.y);
        renderer.ctx.restore();
    }
}

/**
 * UI Slider element
 */
class UISlider extends UIElement {
    constructor(x, y, width, height = 20, min = 0, max = 100, value = 50) {
        super(x, y, width, height);
        this.type = 'slider';
        this.min = min;
        this.max = max;
        this.value = Math.max(min, Math.min(max, value));
        this.isDragging = false;
        this.onChange = null;
        
        this.style = {
            trackColor: '#34495e',
            fillColor: '#4a90e2',
            handleColor: '#ffffff',
            handleSize: 16
        };
        
        // Set up slider-specific event handlers
        this.onPointerDown = (x, y, button) => {
            console.log('Slider pointer down:', x, y, button);
            if (button === 0) { // Left mouse button
                this.isDragging = true;
                this.updateValue(x);
            }
        };
        
        this.onPointerUp = (x, y, button) => {
            console.log('Slider pointer up:', x, y, button);
            this.isDragging = false;
        };
        
        this.onPointerMove = (x, y, isDown) => {
            if (this.isDragging && isDown) {
                console.log('Slider dragging:', x, y);
                this.updateValue(x);
            }
        };
    }
    
    containsPoint(x, y) {
        // Expand hit area for easier interaction
        const handleSize = this.style.handleSize;
        return x >= this.x - handleSize/2 && x <= this.x + this.width + handleSize/2 &&
               y >= this.y - handleSize/2 && y <= this.y + this.height + handleSize/2;
    }
    
    updateValue(x) {
        const relativeX = Math.max(0, Math.min(this.width, x - this.x));
        const percentage = relativeX / this.width;
        const oldValue = this.value;
        this.value = this.min + (this.max - this.min) * percentage;
        
        if (this.value !== oldValue && this.onChange) {
            this.onChange(this.value);
        }
    }
    
    render(renderer) {
        const handleSize = this.style.handleSize;
        const trackHeight = this.height;
        const percentage = (this.value - this.min) / (this.max - this.min);
        const handleX = this.x + this.width * percentage;
        
        renderer.ctx.save();
        
        // Draw track background
        renderer.ctx.fillStyle = this.style.trackColor;
        renderer.ctx.fillRect(this.x, this.y + (this.height - trackHeight) / 2, this.width, trackHeight);
        
        // Draw filled portion
        renderer.ctx.fillStyle = this.style.fillColor;
        renderer.ctx.fillRect(this.x, this.y + (this.height - trackHeight) / 2, this.width * percentage, trackHeight);
        
        // Draw handle
        renderer.ctx.fillStyle = this.style.handleColor;
        renderer.ctx.beginPath();
        renderer.ctx.arc(handleX, this.y + this.height / 2, handleSize / 2, 0, Math.PI * 2);
        renderer.ctx.fill();
        
        // Handle border
        renderer.ctx.strokeStyle = this.style.trackColor;
        renderer.ctx.lineWidth = 2;
        renderer.ctx.stroke();
        
        renderer.ctx.restore();
    }
}

/**
 * UI Image element
 */
class UIImage extends UIElement {
    constructor(x, y, width, height, image) {
        super(x, y, width, height);
        this.type = 'image';
        this.image = image;
        this.interactive = false;
        
        this.style = {
            opacity: 1,
            fit: 'fill' // 'fill', 'contain', 'cover'
        };
    }
    
    render(renderer) {
        if (!this.image) return;
        
        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.style.opacity;
        
        if (this.style.fit === 'fill') {
            renderer.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            // For contain/cover, calculate appropriate scaling
            const imageAspect = this.image.width / this.image.height;
            const containerAspect = this.width / this.height;
            
            let drawWidth, drawHeight, drawX, drawY;
            
            if (this.style.fit === 'contain') {
                if (imageAspect > containerAspect) {
                    drawWidth = this.width;
                    drawHeight = this.width / imageAspect;
                    drawX = this.x;
                    drawY = this.y + (this.height - drawHeight) / 2;
                } else {
                    drawWidth = this.height * imageAspect;
                    drawHeight = this.height;
                    drawX = this.x + (this.width - drawWidth) / 2;
                    drawY = this.y;
                }
            } else { // cover
                if (imageAspect > containerAspect) {
                    drawWidth = this.height * imageAspect;
                    drawHeight = this.height;
                    drawX = this.x + (this.width - drawWidth) / 2;
                    drawY = this.y;
                } else {
                    drawWidth = this.width;
                    drawHeight = this.width / imageAspect;
                    drawX = this.x;
                    drawY = this.y + (this.height - drawHeight) / 2;
                }
            }
            
            renderer.ctx.drawImage(this.image, drawX, drawY, drawWidth, drawHeight);
        }
        
        renderer.ctx.restore();
    }
}

/**
 * UI Scrollable Container element
 */
class UIScrollContainer extends UIElement {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.type = 'scrollcontainer';
        this.clipChildren = true;
        this.scrollX = 0;
        this.scrollY = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.scrollSpeed = 1.0;
        this.isDragging = false;
        this.lastPointerY = 0;
        
        // Set up scroll event handlers
        this.onPointerDown = (x, y, button) => {
            if (button === 0) {
                this.isDragging = true;
                this.lastPointerY = y;
            }
        };
        
        this.onPointerUp = (x, y, button) => {
            this.isDragging = false;
        };
        
        this.onPointerMove = (x, y, isDown) => {
            if (this.isDragging && isDown) {
                const deltaY = y - this.lastPointerY;
                this.scrollY += deltaY * this.scrollSpeed;
                this.clampScroll();
                this.updateChildPositions();
                this.lastPointerY = y;
            }
        };
    }
    
    addChild(child) {
        super.addChild(child);
        this.updateContentSize();
    }
    
    removeChild(child) {
        super.removeChild(child);
        this.updateContentSize();
    }
    
    updateContentSize() {
        if (this.children.length === 0) {
            this.contentWidth = 0;
            this.contentHeight = 0;
            return;
        }
        
        let maxX = 0;
        let maxY = 0;
        
        this.children.forEach(child => {
            maxX = Math.max(maxX, child.relativeX + child.width);
            maxY = Math.max(maxY, child.relativeY + child.height);
        });
        
        this.contentWidth = maxX;
        this.contentHeight = maxY;
    }
    
    clampScroll() {
        const maxScrollY = Math.max(0, this.contentHeight - this.height);
        this.scrollY = Math.max(0, Math.min(maxScrollY, this.scrollY));
        
        const maxScrollX = Math.max(0, this.contentWidth - this.width);
        this.scrollX = Math.max(0, Math.min(maxScrollX, this.scrollX));
    }
    
    updateChildPositions() {
        this.children.forEach(child => {
            child.relativeX = child.originalRelativeX - this.scrollX;
            child.relativeY = child.originalRelativeY - this.scrollY;
        });
    }
    
    addScrollChild(child, relativeX, relativeY) {
        child.relativeX = relativeX;
        child.relativeY = relativeY;
        child.originalRelativeX = relativeX;
        child.originalRelativeY = relativeY;
        this.addChild(child);
    }
    
    render(renderer) {
        // Render container background first
        renderer.ctx.save();
        renderer.ctx.fillStyle = this.style.backgroundColor || '#34495e';
        renderer.ctx.fillRect(this.x, this.y, this.width, this.height);
        
        if (this.style.borderWidth > 0) {
            renderer.ctx.strokeStyle = this.style.borderColor || '#2c3e50';
            renderer.ctx.lineWidth = this.style.borderWidth;
            renderer.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        renderer.ctx.restore();
        
        // Set up clipping for content
        renderer.ctx.save();
        renderer.ctx.beginPath();
        renderer.ctx.rect(this.x, this.y, this.width, this.height);
        renderer.ctx.clip();
        
        // Update child positions based on scroll
        this.updatePosition();
        
        // Render children
        this.children.forEach(child => {
            if (child.visible && child.render) {
                child.render(renderer);
            }
        });
        
        renderer.ctx.restore();
        
        // Draw scrollbar if content overflows
        this.drawScrollbar(renderer);
    }
    
    drawScrollbar(renderer) {
        if (this.contentHeight <= this.height) return;
        
        const scrollbarWidth = 8;
        const scrollbarX = this.x + this.width - scrollbarWidth - 2;
        const scrollbarHeight = this.height - 4;
        const scrollbarY = this.y + 2;
        
        // Draw scrollbar track
        renderer.ctx.save();
        renderer.ctx.fillStyle = '#2c3e50';
        renderer.ctx.fillRect(scrollbarX, scrollbarY, scrollbarWidth, scrollbarHeight);
        
        // Draw scrollbar thumb
        const thumbHeight = Math.max(20, (this.height / this.contentHeight) * scrollbarHeight);
        const thumbY = scrollbarY + (this.scrollY / this.contentHeight) * scrollbarHeight;
        
        renderer.ctx.fillStyle = '#95a5a6';
        renderer.ctx.fillRect(scrollbarX, thumbY, scrollbarWidth, thumbHeight);
        renderer.ctx.restore();
    }
}

// Export for use in other modules or direct browser usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GameFramework,
        GameState,
        Renderer,
        AssetManager,
        SoundManager,
        RenderCache,
        Spritesheet,
        AnimationPlayer,
        ParticleSystem,
        ParticleEmitter,
        Particle,
        TweenManager,
        Tween,
        EffectsManager,
        TimeManager,
        InputManager,
        GameObject,
        TileMap,
        UIManager,
        UIElement,
        UIButton,
        UIPanel,
        UIText,
        UISlider,
        UIImage,
        UIScrollContainer
    };
} else if (typeof window !== 'undefined') {
    window.ProofCanvas = {
        GameFramework,
        GameState,
        Renderer,
        AssetManager,
        SoundManager,
        RenderCache,
        Spritesheet,
        AnimationPlayer,
        ParticleSystem,
        ParticleEmitter,
        Particle,
        TweenManager,
        Tween,
        EffectsManager,
        TimeManager,
        InputManager,
        GameObject,
        TileMap,
        UIManager,
        UIElement,
        UIButton,
        UIPanel,
        UIText,
        UISlider,
        UIImage,
        UIScrollContainer
    };
}
