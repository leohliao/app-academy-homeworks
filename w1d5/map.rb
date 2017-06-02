class Map
  def initialize
    @maps = []
  end

  def assign(key, value)
    map_index = @maps.index { |map| map[0] == key }
    map_index ? @maps[map_index][1] = value : @maps.push([key, value])
    [key, value]
  end

  def lookup(key)
    @maps.each do |map|
      return map[1] if map[0] == key
    end
    nil
  end

  def remove(key)
    @maps.reject! { |map| map[0] == (key) }
  end

  def show
    deep_dup(@maps)
  end

  private
  def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
  end
end
