# Color Reference Rule

## Primary Gradient (from "Get a Quote" button)

Always use this color scheme for CTAs, accent elements, and highlights across the website:

### Gradient
```
bg-gradient-to-r from-brand-cyan to-[#29619e]
```

### Individual Colors
- **Primary Cyan**: `brand-cyan` (defined in Tailwind config)
- **Secondary Blue**: `#29619e`

### Shadow
```
shadow-lg shadow-brand-cyan/30
hover:shadow-xl hover:shadow-brand-cyan/40
```

### Text Gradient (for highlights)
```
text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]
```

### Underlines/Accents
```
bg-gradient-to-r from-brand-cyan to-[#29619e]
```

### Hover States
```
hover:from-brand-cyan hover:to-[#29619e]
```

## Usage Guidelines

1. **CTA Buttons**: Use the full gradient with shadow
2. **Section Underlines**: Use the gradient as a 1-2px line
3. **Badge/Labels**: Use `brand-cyan` as primary color
4. **Background Blobs**: Use `/10` or `/15` opacity variants
5. **Text Accents**: Use text gradient for important words

## Do NOT Use
- Random cyan colors like `cyan-500` or `cyan-400` (use `brand-cyan` instead)
- Different blue shades (use `#29619e` as the secondary)
