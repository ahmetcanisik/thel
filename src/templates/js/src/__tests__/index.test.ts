import { Parcol } from '../index';

describe('Parcol', () => {
  let parcol: Parcol;

  beforeEach(() => {
    parcol = new Parcol('~');
  });

  describe('pit method', () => {
    it('should handle basic color formatting', () => {
      const result = parcol.pit('Hello ~r World~ normal text');
      expect(result).toContain('World');
      expect(result).toContain('normal text');
    });

    it('should handle multiple color formats', () => {
      const result = parcol.pit('~b Bold~ and ~it Italic~');
      expect(result).toContain('Bold');
      expect(result).toContain('Italic');
    });

    it('should handle background colors', () => {
      const result = parcol.pit('~bgbl Blue Background~');
      expect(result).toContain('Blue Background');
    });

    it('should handle hyperlinks', () => {
      const result = parcol.pit('~l Click here -> https://example.com~');
      expect(result).toContain('Click here');
    });

    it('should return empty string for empty input', () => {
      expect(parcol.pit()).toBe('');
    });

    it('should handle multiple arguments', () => {
      const result = parcol.pit('Hello', '~r World~', '!');
      expect(result).toContain('Hello');
      expect(result).toContain('World');
      expect(result).toContain('!');
    });
  });
}); 