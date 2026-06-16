import type React from 'react'

type HeadingProps = React.ComponentPropsWithoutRef<'h1'>
type ParagraphProps = React.ComponentPropsWithoutRef<'p'>
type LinkProps = React.ComponentPropsWithoutRef<'a'>
type ListProps = React.ComponentPropsWithoutRef<'ul'>
type OrderedListProps = React.ComponentPropsWithoutRef<'ol'>
type ListItemProps = React.ComponentPropsWithoutRef<'li'>
type BlockquoteProps = React.ComponentPropsWithoutRef<'blockquote'>
type CodeProps = React.ComponentPropsWithoutRef<'code'>
type PreProps = React.ComponentPropsWithoutRef<'pre'>
type StrongProps = React.ComponentPropsWithoutRef<'strong'>
type HRProps = React.ComponentPropsWithoutRef<'hr'>

export const mdxComponents = {
  h1: ({ children, ...props }: HeadingProps) => <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }} {...props}>{children}</h1>,
  h2: ({ children, ...props }: HeadingProps) => <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }} {...props}>{children}</h2>,
  h3: ({ children, ...props }: HeadingProps) => <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.75rem' }} {...props}>{children}</h3>,
  p: ({ children, ...props }: ParagraphProps) => <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }} {...props}>{children}</p>,
  a: ({ children, ...props }: LinkProps) => <a style={{ color: '#6C63FF', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>,
  ul: ({ children, ...props }: ListProps) => <ul style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', paddingLeft: '1.5rem', listStyleType: 'disc' }} {...props}>{children}</ul>,
  ol: ({ children, ...props }: OrderedListProps) => <ol style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', paddingLeft: '1.5rem' }} {...props}>{children}</ol>,
  li: ({ children, ...props }: ListItemProps) => <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }} {...props}>{children}</li>,
  blockquote: ({ children, ...props }: BlockquoteProps) => <blockquote style={{ borderLeft: '3px solid #6C63FF', paddingLeft: '1.25rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: '1.5rem 0' }} {...props}>{children}</blockquote>,
  code: ({ children, ...props }: CodeProps) => <code style={{ backgroundColor: 'var(--surface-hover)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.875rem', color: '#FFD93D' }} {...props}>{children}</code>,
  pre: ({ children, ...props }: PreProps) => <pre style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', overflowX: 'auto', marginBottom: '1.5rem' }} {...props}>{children}</pre>,
  strong: ({ children, ...props }: StrongProps) => <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }} {...props}>{children}</strong>,
  hr: (props: HRProps) => <hr style={{ borderColor: 'var(--border)', margin: '2rem 0' }} {...props} />,
}